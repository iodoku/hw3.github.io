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

def applypostapplications(mysql):
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


def applygetapplications(mysql):
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
    

def applydeleteapplications(mysql,id):
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
            return jsonify({"error": "지원 내역을 찾을 수 없음 또는 authorized 없음"}), 404

        # 지원 내역 삭제
        delete_query = "DELETE FROM applications WHERE id = %s AND user_id = %s"
        cursor.execute(delete_query, (id, user_id))
        mysql.connection.commit()

        return jsonify({"message": "취소 성공"}), 200

    except Exception as e:
        return jsonify({"error": "An error occurred", "details": str(e)}), 500