[![Build Status](https://travis-ci.org/Arrotech/HomeAutomation-Nodejs.svg?branch=develop)](https://travis-ci.org/Arrotech/HomeAutomation-Nodejs) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) [![npm version](http://img.shields.io/npm/v/REPO.svg?style=flat)](https://npmjs.org/package/REPO "View this project on npm")



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
