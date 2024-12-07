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
        status = request.args.get('status')
        order_by = request.args.get('order_by', 'created_at')

        # 허용된 정렬 필드만 사용하도록 제한
        allowed_order_by = ['created_at', 'application_date', 'status']
        if order_by not in allowed_order_by:
            return json.dumps({"error": "Invalid order_by field"}), 400

        # 기본 쿼리 작성
        query = "SELECT id, user_id, job_id, application_date, status, notes, created_at FROM applications WHERE user_id = %s"
        params = [user_id]

        # 상태별 필터링 추가
        if status:
            query += " AND status = %s"
            params.append(status)

        # 정렬 추가
        query += f" ORDER BY {order_by} DESC"

        # 쿼리 실행
        cursor = mysql.connection.cursor()
        cursor.execute(query, tuple(params))
        rows = cursor.fetchall()

        # 컬럼명을 딕셔너리로 매핑
        column_names = [desc[0] for desc in cursor.description]
        applications = [
            {
                "id": row[0],
                "user_id": row[1],
                "job_id": row[2],
                "application_date": row[3],
                "status": row[4],
                "notes": row[5],
                "created_at": row[6],
            }
            for row in rows
        ]

        # JSON 직렬화를 위한 datetime 변환
        def json_serializer(obj):
            if isinstance(obj, datetime):
                return obj.strftime('%Y-%m-%d %H:%M:%S')
            raise TypeError("Type not serializable")

        response = json.dumps({"applications": applications}, default=json_serializer)
        return response, 200, {'Content-Type': 'application/json'}

    except Exception as e:
        # 예외 처리 및 디버깅
        return json.dumps({"error": "An error occurred", "details": str(e)}), 500, {'Content-Type': 'application/json'}




# 지원 취소 (DELETE /applications/:id)
@app.route('/applications/<int:application_id>', methods=['DELETE'])
@jwt_required()
def cancel_application(application_id):
    user_id = get_jwt_identity()

    # 지원 내역 확인
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM applications WHERE id = %s AND user_id = %s", (application_id, user_id))
    application = cursor.fetchone()

    if not application:
        return jsonify({"error": "지원 내역을 찾을 수 없습니다."}), 404

    if application['status'] != "지원 완료":
        return jsonify({"error": "현재 상태에서는 지원 취소가 불가능합니다."}), 400

    # 상태 업데이트
    cursor.execute("UPDATE applications SET status = %s WHERE id = %s", ("취소됨", application_id))
    mysql.connection.commit()

    return jsonify({"message": "지원이 취소되었습니다."}), 200

            
if __name__ == "__main__":
    initialize_data()
    app.run(host="0.0.0.0", port=8080, debug=True)