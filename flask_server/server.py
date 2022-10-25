from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

# create the extension
db = SQLAlchemy()
# create the app
app = Flask(__name__)
CORS(app)

# we can put high scores here, or really whatever we want to store
# at any given route


# configure the SQLite database, relative to the app instance folder
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
# initialize the app with the extension
db.init_app(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String)

with app.app_context():
    db.create_all()

@app.route("/users")
def user_list():
    users = db.session.execute(db.select(User).order_by(User.username)).scalars()
    return render_template("user/list.html", users=users)

@app.route("/users/create", methods=["GET", "POST"])
def user_create():
    if request.method == "POST":
        user = User(
            username=request.form["username"],
            email=request.form["email"],
        )
        db.session.add(user)
        db.session.commit()
        return redirect(url_for("user_detail", id=user.id))

    return render_template("user/create.html")

@app.route("/user/<int:id>")
def user_detail(id):
    user = db.get_or_404(User, id)
    return render_template("user/detail.html", user=user)

@app.route("/user/<int:id>/delete", methods=["GET", "POST"])
def user_delete(id):
    user = db.get_or_404(User, id)

    if request.method == "POST":
        db.session.delete(user)
        db.session.commit()
        return redirect(url_for("user_list"))

    return render_template("user/delete.html", user=user)


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

if __name__ == "__main__":
    app.run(debug=True)
