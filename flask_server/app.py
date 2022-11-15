from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from sqlalchemy import select
import os

from tables.user import db, app
import tables.user

# Helpers
# User Table
User = tables.user.User

# Game Table
Game = tables.user.Game

# Entire table file
tablesDb = tables.user

# API call to create a User
@app.route('/add_user', methods=['POST'])
def create_user():
    UserName = request.json['UserName']
    UserPass = request.json['UserPass']
    UserDisplayName = request.json['UserDisplayName']

    add_user = User(UserName=UserName, UserPass=UserPass, UserDisplayName=UserDisplayName)
    db.session.add(add_user)
    db.session.commit()

    return tablesDb.user_schema.jsonify(add_user)

# var = 3
# Get a User
@app.route('/users', methods=['GET'])
def get_users():
    selectedUsers = User.query.get(3)
    singleResult = tablesDb.user_schema.jsonify(selectedUsers)

    all_users = User.query.all()
    allResults = tablesDb.user_schema.dump(all_users, many=True)
    return allResults

# Get a Game
@app.route('/games', methods=['GET'])
def get_games():
    selectedUsers = Game.query.get(3)
    singleResult = tablesDb.game_schema.jsonify(selectedUsers)

    all_users = Game.query.all()
    allResults = tablesDb.game_schema.dump(all_users, many=True)
    return allResults
    

# API call to create a Game
@app.route('/add_game', methods=['POST'])
def create_game():
    GameName = request.json['GameName']
    Genre = request.json['Genre']

    add_game = Game(GameName=GameName, Genre=Genre)
    db.session.add(add_game)
    db.session.commit()

    return tablesDb.game_schema.jsonify(add_game)


# Test API Call
@app.route('/test')
def test():
    return 'Testing server!'

# Run Server
if __name__ == '__main__':
    app.run(debug=True)
