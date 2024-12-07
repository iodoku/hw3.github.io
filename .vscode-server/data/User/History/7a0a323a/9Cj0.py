class Job(db.Model):
    __tablename__ = 'jobs'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(150), nullable=False)
    company = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    experience = db.Column(db.String(50))
    salary = db.Column(db.String(50))
    description = db.Column(db.Text, nullable=False)

# 테이블 생성
with app.app_context():
    db.create_all()