from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# we can put high scores here, or really whatever we want to store
# at any given route


@app.route('/api/members')
def members():
    return {"members": [
        {"name": "John", "age": 30, "score": 1000},
        {"name": "Jane", "age": 25, "score": 2000},
        {"name": "Bob", "age": 20, "score": 3000},
        {"name": "Alice", "age": 15, "score": 4000},
        {"name": "Joe", "age": 10, "score": 5000},
        {"name": "Jill", "age": 5, "score": 6000},
        ]}

@app.route('/random')
def random():
    return {"random": 42}

if __name__ == "__main__":
    app.run(debug=True)
