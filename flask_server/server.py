from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# create the extension
db = SQLAlchemy()
# create the app
app = Flask(__name__)
# configure the SQLite database, relative to the app instance folder
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
# initialize the app with the extension
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route("/users")
def user_list():
    print("users data")

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
