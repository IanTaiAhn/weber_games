# CS3750_project
 
# weber_games

# Frontend
cd into weber_games and run:
npm install
(this will install all the requirements for for the react project)

# In the flask_server directory
First, create a virtual environment and activate it
(create it)  python -m venv venv (windows)
(activate it)  venv/Scripts/activate
(install flask)  pip install Flask
# Install the requirements.txt
Install the requirements.txt file using the following command:

pip install -r requirements.txt (windows)
pip3 install -r requirements (mac)

# All set up and ready to run
(run it) python server.py   (windows)
(run it) python3 server.py  (mac)

# Note about server.py
If you cloned the repo then the code for the test api calls in "server.py" should be there.
Run the server, and put in "/api/members/" to test if the api calls are working.

# Notice in the pyvenv.cfg
We will need to update the "home" variable that paths to where we have python installed.
I dont know if only changing that variable will work..
I had to delete the existing venv, and run my own commands to create the venv.
