from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_jwt_extended import JWTManager, create_access_token, create_refresh_token, jwt_required, get_jwt_identity
from flask_swagger_ui import get_swaggerui_blueprint
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from Auth import authregister, authlogin, authrefresh, authprofile
from Posting import postjobs, postjobsid
from jobcrawl import save_to_mysql
from MySQLdb.cursors import DictCursor
import mysql.connector
import re
from collections import OrderedDict
import json

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
    
@app.route('/jobs', methods=['GET'])
def get_jobs():
    return postjobs(mysql)

# 공고 상세 조회 (GET /jobs/:id)
@app.route('/jobs/<int:job_id>', methods=['GET'])
def get_job_and_recommendations(job_id):
    return postjobsid(job_id,mysql,app)
   
################################################################################################
################################################################################################  

@app.route('/applications', methods=['POST'])
@jwt_required()
def apply():
    user_id = get_jwt_identity()
    data = request.json
    job_id = data.get('job_id')
    resume = request.files.get('resume')  # 선택적 파일 첨부

    # 중복 지원 체크
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM applications WHERE user_id = %s AND job_id = %s", (user_id, job_id))
    if cursor.fetchone():
        return jsonify({"error": "이미 지원한 공고입니다."}), 400

    # 지원 정보 저장
    query = "INSERT INTO applications (user_id, job_id, status, created_at) VALUES (%s, %s, %s, NOW())"
    cursor.execute(query, (user_id, job_id, "지원 완료"))
    mysql.connection.commit()

    return jsonify({"message": "지원이 완료되었습니다."}), 201

# 지원 내역 조회 (GET /applications)
@app.route('/applications', methods=['GET'])
@jwt_required()
def get_applications():
    try:
        # 현재 사용자의 ID 가져오기
        user_id = get_jwt_identity()

        # 쿼리 파라미터 가져오기
        status = request.args.get('지원내역')
        order_by = request.args.get('보는순', '날짜느린순')

        # 정렬 기준 매핑 (사용자 친화적 입력 -> SQL 정렬)
        order_map = {
            "날짜느린순": "created_at DESC",
            "날짜빠른순": "created_at ASC"
        }
        order_sql = order_map.get(order_by)

        if not order_sql:
            return json.dumps({"error": "Invalid order_by field"}), 400

        # 기본 쿼리 작성
        query = "SELECT id, user_id, job_id, application_date, status, notes, created_at FROM applications WHERE user_id = %s"
        params = [user_id]

        # 상태별 필터링 추가
        if status:
            query += " AND status = %s"
            params.append(status)

        # 정렬 추가
        query += f" ORDER BY {order_sql}"

        # 쿼리 실행
        cursor = mysql.connection.cursor()
        cursor.execute(query, tuple(params))
        rows = cursor.fetchall()

        # 컬럼명을 딕셔너리로 매핑
        column_names = [desc[0] for desc in cursor.description]
        applications = [
            {
                column_names[i]: (row[i].strftime('%Y-%m-%d %H:%M:%S') if isinstance(row[i], datetime) else row[i])
                for i in range(len(row))
            }
            for row in rows
        ]

        return json.dumps({"applications": applications}), 200, {'Content-Type': 'application/json'}

    except Exception as e:
        # 예외 처리 및 디버깅
        return json.dumps({"error": "An error occurred", "details": str(e)}), 500, {'Content-Type': 'application/json'}





# 지원 취소 (DELETE /applications/:id)
@app.route('/applications/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_application(id):
    try:
        # 현재 사용자의 ID 가져오기
        user_id = get_jwt_identity()

        # 딕셔너리 커서 사용
        cursor = mysql.connection.cursor(DictCursor)

        # 지원 내역 확인
        query = "SELECT * FROM applications WHERE id = %s AND user_id = %s"
        cursor.execute(query, (id, user_id))
        application = cursor.fetchone()

        if not application:
            return jsonify({"error": "Application not found or not authorized"}), 404

        # 지원 내역 삭제
        delete_query = "DELETE FROM applications WHERE id = %s AND user_id = %s"
        cursor.execute(delete_query, (id, user_id))
        mysql.connection.commit()

        return jsonify({"message": "Application deleted successfully"}), 200

    except Exception as e:
        return jsonify({"error": "An error occurred", "details": str(e)}), 500

            
if __name__ == "__main__":
    initialize_data()
    app.run(host="0.0.0.0", port=8080, debug=True)