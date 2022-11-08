from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os
from flask_cors import CORS
# from ..app import *
# import app

# ??
# Next step will to initialize the database in another python file, and then
# have a bunch of python files only dedicated for sqllite tables.
app = Flask(__name__)
CORS(app)
basedir = os.path.abspath(os.path.dirname(__file__))
# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
# Init db
db = SQLAlchemy(app)
# Init ma... Helps with schema stuff?
ma = Marshmallow(app)

# User Class/Model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    UserName = db.Column(db.String(50))
    UserPass = db.Column(db.String(50))
    UserDisplayName = db.Column(db.String(50))

def __init__(self, UserName, UserPass, UserDisplayName):
    self.UserName = UserName
    self.UserPass = UserPass
    self.UserDisplayName = UserDisplayName

# User Schema
class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'UserName', 'UserPass', 'UserDisplayName')

# Init schema
user_schema = UserSchema()
# users_schema = UserSchema()