from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
with app.app_context():
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sqlite3'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
    db = SQLAlchemy(app)
    class User(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        UserName = db.Column(db.String(50))
        UserPass = db.Column(db.String(50))
        UserDisplayName = db.Column(db.String(50))
    db.create_all()