# Live Website: https://iantaiahn.github.io/weber_games

# Frontend
- Node
- React
- Tailwind
- Bootstrap
# Backend
- Flask
- SQLAlchemy
- Flask_SQLAlchemy

# Getting Started

cd into CS3750_project and run:
npm install
(this will install all the requirements for for the react project)

# In the flask_server directory

First, create a virtual environment and activate it

(create it) python -m venv venv (windows)

(activate it) venv/Scripts/activate

(For Mac)
If you have more than one version of python installed on your computer use python3 instead of python.

1. (If you dont already have pip): python -m pip install --user --upgrade pip
2. (If you dont already have virtualenv): python -m pip install --user virtualenv
3. Navigate to the flask_server directory in the terminal
4. python -m venv venv
5. source venv/bin/activate

# Install the requirements.txt

Install the requirements.txt file using the following command:

pip install -r requirements.txt (windows)

pip install -r requirements.txt (mac)

# All set up and ready to run

(run it) python server.py (windows)

(run it) python3 server.py (mac)

# Note about server.py

If you cloned the repo then the code for the test api calls in "server.py" should be there.
Run the server, and put in "/api/members/" to test if the api calls are working.

# Notice in the pyvenv.cfg (deprecated, just create your own venv when cloning any branch)

We will need to update the "home" variable that paths to where we have python installed.
I dont know if only changing that variable will work..
I had to delete the existing venv, and run my own commands to create the venv.
