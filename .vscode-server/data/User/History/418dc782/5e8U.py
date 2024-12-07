import pytest
from app import create_app

@pytest.fixture
def app():
    # Flask 애플리케이션 생성
    app = create_app()
    app.config.update({
        "TESTING": True,  # 테스트 모드 활성화
    })
    return app

@pytest.fixture
def client(app):
    # 테스트 클라이언트 생성
    return app.test_client()

def test_home_route(client):
    # "/" 라우트 테스트
    response = client.get('/')
    assert response.status_code == 200
    assert b"Hello, Flask!" in response.data
