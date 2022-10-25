from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    email = db.Column(db.String(100), unique=True)
    date_joined = db.Column(db.Date, default=datetime.utcnow)

    def __repr__(self):
        return f'<User: {self.email}>'


print("what")


# Showing backend to frontend connectivity.
# from flask import Flask
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# @app.route("/users")
# def user_list():
#     print("users data")

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50))
#     email = db.Column(db.String(100), unique=True)
#     date_joined = db.Column(db.Date, default=datetime.utcnow)

#     def __repr__(self):
#         return f'<User: {self.email}>'



# app = Flask(__name__)
# CORS(app)

# @app.route('/api/members')
# def members():
#     return {"members": [
#         {"name": "John", "age": 30, "score": 1000},
#         {"name": "Jane", "age": 25, "score": 2000},
#         {"name": "Bob", "age": 20, "score": 3000},
#         {"name": "Alice", "age": 15, "score": 4000},
#         {"name": "Joe", "age": 10, "score": 5000},
#         {"name": "Jill", "age": 5, "score": 6000},
#         ]}

# @app.route('/random')
# def random():
#     return {"random": 42}

# if __name__ == "__main__":
#     app.run(debug=True)
