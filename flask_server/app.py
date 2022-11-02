from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from sqlalchemy import select
import os

# Here I'm going to try to import the Schemas/tables, and see if that is an option to keep code cleaner.
import tables.UserTable
from tables.UserTable import app, db

User = tables.UserTable.User
tablesDb = tables.UserTable

# app = Flask(__name__)
# basedir = os.path.abspath(os.path.dirname(__file__))
# # Database
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
# # Init db
# db = SQLAlchemy(app)
# # Init ma... Helps with schema stuff?
# ma = Marshmallow(app)


# # User Class/Model
# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     UserName = db.Column(db.String(50))
#     UserPass = db.Column(db.String(50))
#     UserDisplayName = db.Column(db.String(50))

# def __init__(self, UserName, UserPass, UserDisplayName):
#     self.UserName = UserName
#     self.UserPass = UserPass
#     self.UserDisplayName = UserDisplayName

# # User Schema
# class UserSchema(ma.Schema):
#     class Meta:
#         fields = ('id', 'UserName', 'UserPass', 'UserDisplayName')

# # Init schema
# user_schema = UserSchema()
# users_schema = UserSchema()


# API call to create a User
@app.route('/add_user', methods=['POST'])
def create_user():
    UserName = request.json['UserName']
    UserPass = request.json['UserPass']
    UserDisplayName = request.json['UserDisplayName']

    add_user = tables.UserTable.User(UserName=UserName, UserPass=UserPass, UserDisplayName=UserDisplayName)
    db.session.add(add_user)
    db.session.commit()

    return tables.UserTable.user_schema.jsonify(add_user)

# var = 3
# Get a User
@app.route('/user', methods=['GET'])
def get_users():
    # all_users = db.session.execute(db.select(User))
    # all_users = db.get_or_404(User, User.id)
    all_users = User.query.get(1)
    # for x in range(4):
    #     all_users = User.query.get(x)
    # result = tables.UserTable.users_schema.dump(all_users)
    # users = db.session.execute(db.select(User).order_by(User.UserName))   
    return tables.UserTable.user_schema.jsonify(all_users)
    # return render_f
    
# Test API Call
@app.route('/test')
def test():
    return 'Testing server!'

with app.app_context():
    db.create_all()
    
# Run Server
if __name__ == '__main__':
    app.run(debug=True)
