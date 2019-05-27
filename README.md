[![Build Status](https://travis-ci.org/Arrotech/HomeAutomation-Nodejs.svg?branch=develop)](https://travis-ci.org/Arrotech/HomeAutomation-Nodejs) [![PEP8](https://img.shields.io/badge/code%20style-pep8-orange.svg)](https://www.python.org/dev/peps/pep-0008/) [![Python 3.6](https://img.shields.io/badge/python-3.6-blue.svg)](https://www.python.org/downloads/release/python-360/)



# HOME AUTOMATION API's

This project i am to create a set of API endpoints defined in the API Endpoints Specification
section and use database to store data.



Below are the Endpoints that have been created.

| EndPoints       | Functionality  | HTTP Method  |
| ------------- |:-------------:| -----:|
| api/v1/devices | Add device | POST |
| api/v1/devices | Fetch all devices | GET |
| api/v1/devices/:id | Fetch one device | GET |
| api/v1/devices/:id | Edit a device | PUT |
| api/v1/devices/:id | Delete a device | DELETE |


**TOOLS TO BE USED IN THE CHALLENGE**
1. Server-Side Framework:[Node Javascript Framework](https://nodejs.org/en/docs/)
2. Linting Library:[Pylint, a Python Linting Library](https://www.pylint.org/)
3. Style Guide:[PEP8 Style Guide](https://www.python.org/dev/peps/pep-0008/)
4. Testing Endpoints: [PostMan](https://www.getpostman.com/)


**Requirements**

		npm install node

    npm install express

    npm install nodemon

    npm install babel



**How to run the application**
 1. Make a new directory on your computer
 2. `git clone` this  <code>[repo](https://github.com/Arrotech/HomeAutomation-Nodejs/)</code>
 3. Create virtual environment by typing this in the terminal - virtualenv -p python3 venv
 4. run `cat requirements.txt | xargs npm install -g` on the terminal to install the dependencies
 5. Then type on the terminal ```npm run start-watch``` to start and run the server



**Author**

     Harun Gachanja Gitundu
