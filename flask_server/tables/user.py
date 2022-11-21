from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os
from flask_cors import CORS

# I dont like this, but for now this will do.
# I'm creating all of the tables in here instead of putting them into their own py files. 
# I've gotta figure out how to do that so that our file structure is nicer!

app = Flask(__name__)
CORS(app)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
db = SQLAlchemy(app)
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

# User Table End

# Game Class/Model
class Game(db.Model):
    Gameid = db.Column(db.Integer, primary_key=True)
    GameName = db.Column(db.String(50))
    Genre = db.Column(db.String(50))

def __init__(self, GameName, Genre):
    self.GameName = GameName
    self.Genre = Genre

# Schema
class GameSchema(ma.Schema):
    class Meta:
        fields = ('Gameid', 'GameName', 'Genre')

# Init schema
game_schema = GameSchema()

# Temp Hangman recordings.
class Hangman(db.Model):
    Hangmanid = db.Column(db.Integer, primary_key=True)
    UserDisplayName = db.Column(db.String(50))
    GuessedWord = db.Column(db.String(50))
    Tries = db.Column(db.Integer)
    TotalWins = db.Column(db.Integer)

def __init__(self, UserDisplayName, GuessedWord, Tries, TotalWins):
    self.UserDisplayName = UserDisplayName
    self.GuessedWord = GuessedWord
    self.Tries = Tries
    self.TotalWins = TotalWins

# Schema
class HangmanSchema(ma.Schema):
    class Meta:
        fields = ('Hangmanid', 'UserDisplayName', 'GuessedWord', 'Tries', 'TotalWins')

# Init schema
hangman_schema = HangmanSchema()

with app.app_context():
    db.create_all()