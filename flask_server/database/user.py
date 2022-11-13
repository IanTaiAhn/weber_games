from .extensions import db
from .__init__ import ma
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

