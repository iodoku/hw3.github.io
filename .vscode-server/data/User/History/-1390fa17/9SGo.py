from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_jwt_extended import JWTManager, create_access_token, create_refresh_token, jwt_required, get_jwt_identity
from flask_swagger_ui import get_swaggerui_blueprint
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from Auth import authregister, authlogin, authrefresh, authprofile
from jobcrawl import save_to_mysql
from MySQLdb.cursors import DictCursor
import mysql.connector
import re

app = Flask(__name__)

# MySQL Configuration
app.config['MYSQL_HOST'] = '113.198.66.75'
app.config['MYSQL_USER'] = 'jdh'
app.config['MYSQL_PASSWORD'] = '1234'
app.config['MYSQL_DB'] = 'hw3'
app.config['MYSQL_PORT'] = 13048
mysql = MySQL(app)

# CORS Configuration
CORS(app)

# JWT Configuration
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'
jwt = JWTManager(app)

# Swagger Configuration
SWAGGER_URL = '/swagger'
API_URL = '/static/swagger.json'
swaggerui_blueprint = get_swaggerui_blueprint(SWAGGER_URL, API_URL, config={'app_name': "Saramin Jobs API"})
app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)

def initialize_data(): #앱 시작시 1번만 수행 (채용공고 지역별로 100개씩 크롤링)

    # MySQL 저장
    save_to_mysql("113.198.66.75", "jdh", "1234", "hw3", 13048)

    print("Initial data has been crawled and saved to MySQL.")  

################################################################################################
################################################################################################
# 회원가입 API
@app.route('/auth/register', methods=['POST'])
def register():
    return authregister(mysql)

# 로그인 API
@app.route('/auth/login', methods=['POST'])
def login():
    return authlogin(mysql)


# 토큰 갱신 API
@app.route('/auth/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    return authrefresh(mysql)   

# 회원 정보 수정 API
@app.route('/auth/profile', methods=['PUT'])
@jwt_required()
def update_profile():
    return authprofile(mysql)

################################################################################################
################################################################################################
def add_experience_filter(experience_input):
    """
    경력 필터 조건 생성 함수
    """
    try:
        experience_years = int(re.search(r"\d+", experience_input).group())
        return f"""
        (
            (experience LIKE '%~%' 
            AND CAST(SUBSTRING_INDEX(experience, '~', 1) AS UNSIGNED) <= {experience_years} 
            AND CAST(SUBSTRING_INDEX(experience, '~', -1) AS UNSIGNED) >= {experience_years})
            OR (experience REGEXP '^[0-9]+년$' 
            AND CAST(REPLACE(experience, '년', '') AS UNSIGNED) >= {experience_years})
            OR experience LIKE '%경력무관%'
        )
        """
    except AttributeError:
        return "experience LIKE '%경력무관%' OR experience LIKE '%신입%'"
    
    
@app.route('/jobs', methods=['GET'])
def get_jobs():
    # 페이지네이션
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get('page_size', 20))
    start = (page - 1) * page_size

    # 필터링 및 검색 조건
    location = request.args.get('지역')
    experience = request.args.get('경력')
    stack = request.args.get('기술스택')
    search = request.args.get('검색')
    sort_by = request.args.get('정렬','마감순')  # 기본 정렬 기준은 deadline

    # MySQL 쿼리 작성
    query = "SELECT * FROM jobs"
    filters = []
      

    # 필터 조건 추가
    if location:
        filters.append(f"location LIKE '%{location}%'")
       
        
    if experience:
        filters.append(add_experience_filter(experience))
        
    if stack:
        filters.append(f"sector LIKE '%{stack}%'")
        
        
    if search:
        filters = []
        filters.append(f"(company LIKE '%{search}%' OR location LIKE '%{search}%' OR sector LIKE '%{search}%')")

    # WHERE 조건 추가 (filters가 있을 때만 추가)
    if filters:
        query += " WHERE " + " AND ".join(filters)
        
        
    
    if sort_by == "마감순":
        query += " ORDER BY STR_TO_DATE(deadline, '%m/%d(%a)') ASC"
    elif sort_by == "수정순":
        query += " ORDER BY STR_TO_DATE(sector, '%y/%m/%d') DESC"
  
    
    # 페이지네이션 추가
    query += f" LIMIT {start}, {page_size}"

    # MySQL 연결 및 쿼리 실행
    try:
        connection = mysql.connection
        cursor = connection.cursor(DictCursor)
        cursor.execute(query)
        jobs = cursor.fetchall()

        # 전체 공고 수 가져오기
        cursor.execute("SELECT COUNT(*) AS total FROM jobs")
        total_jobs = cursor.fetchone()['total']
        
        if not jobs:
            return jsonify({
                "message": "만족하는 조건이 없습니다",
                "page": page,
                "page_size": page_size,
                "total_jobs": total_jobs,
                "jobs": []
            }), 404

        return jsonify({
            "page": page,
            "page_size": page_size,
            "total_jobs": total_jobs,
            "jobs": jobs
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()

# 공고 상세 조회 (GET /jobs/:id)
@app.route('/jobs/<int:job_id>', methods=['GET'])
def get_job_and_recommendations(job_id):
    try:
        connection = mysql.connection
        cursor = connection.cursor(DictCursor)

        # 현재 공고 가져오기
        query = "SELECT * FROM jobs WHERE id = %s"
        cursor.execute(query, (job_id,))
        job = cursor.fetchone()

        if not job:
            return jsonify({"error": "Job not found"}), 404

        # 현재 공고의 sector와 location 추출
        sector = job['sector'].split(',')[0].strip() if job.get('sector') else ''
        location = job['location'].split()[0].strip() if job.get('location') else ''

        # 비슷한 공고 검색
        similar_jobs_query = """
        SELECT id, title, location AS region
        FROM jobs
        WHERE id != %s
        """
        
        print(similar_jobs_query)
        filters = []
        params = [job_id]

        # 조건 추가
        if sector:
            filters.append("sector LIKE %s")
            params.append(f"%{sector}%")
        if location:
            filters.append("location LIKE %s")
            params.append(f"%{location}%")

        # 필터 조건을 쿼리에 추가
        if filters:
            similar_jobs_query += " AND (" + " OR ".join(filters) + ")"

        # 정렬 및 제한 추가
        similar_jobs_query += """
        ORDER BY STR_TO_DATE(REPLACE(deadline, '~ ', ''), '%m/%d(%a)') ASC
        LIMIT 3
        """

        # 디버깅용 출력
        print("Generated Query:", similar_jobs_query)
        print("Query Parameters:", params)

        # 쿼리 실행
        cursor.execute(similar_jobs_query, tuple(params))
        recommendations = cursor.fetchall()

        # 결과 반환
        return jsonify({
            "id": job['id'],
            "title": job['title'],
            "description": job.get('description', ''),
            "region": job['location'],
            "experience": job['experience'],
            "salary": job['salary'],
            "tech_stack": job['sector'],
            "views": job['views'],
            "related_jobs": recommendations or []
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()









            
if __name__ == "__main__":
    initialize_data()
    app.run(host="0.0.0.0", port=8080, debug=True)