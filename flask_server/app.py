from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from sqlalchemy import select
import os

from tables.user import db, app
import tables.user

# Helpers
User = tables.user.User
tablesDb = tables.user


# API call to create a User
@app.route('/add_user', methods=['POST'])
def create_user():
    UserName = request.json['UserName']
    UserPass = request.json['UserPass']
    UserDisplayName = request.json['UserDisplayName']

    add_user = tables.User.User(UserName=UserName, UserPass=UserPass, UserDisplayName=UserDisplayName)
    db.session.add(add_user)
    db.session.commit()

    return tables.User.user_schema.jsonify(add_user)

# var = 3
# Get a User
@app.route('/user', methods=['GET'])
def get_users():
    selectedUsers = User.query.get(3)
    singleResult = tablesDb.user_schema.jsonify(selectedUsers)

    all_users = User.query.all()
    allResults = tables.User.user_schema.dump(all_users, many=True)
    return allResults
    
# Test API Call
@app.route('/test')
def test():
    return 'Testing server!'

# Run Server
if __name__ == '__main__':
    app.run(debug=True)
