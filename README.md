# Free mentors


[![Build Status](https://travis-ci.org/fikepaci/free-mentor.svg?branch=develop)](https://travis-ci.org/fikepaci/free-mentor) [![Coverage Status](https://coveralls.io/repos/github/fikepaci/free-mentor/badge.svg?branch=develop)](https://coveralls.io/github/fikepaci/free-mentor?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/0d7869300eebc495fb45/maintainability)](https://codeclimate.com/github/fikepaci/free-mentor/maintainability) 

Free Mentors is a social initiative where accomplished professionals become role models to
young people to provide free mentorship sessions.

# UI Tools
- HTML
- CSS
- Javascript
### Links for the UI
github page for user [link here](https://fikepaci.github.io/free-mentor/ui/)

# Getting Started for backend

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See Installation, Running and deployment for more details. This Application is built in nodejs with es6.

Available API

| URL | METHOD | DESCRIPTION |
| ------ | ------ | ---------- |
| /api/v1/auth/signup | POST | Get the user to signup |
| /api/v1/auth/signin | POST | Get the user into the system |
| /api/v1/user/userId | PATCH | Change user to mentor |
| /api/v1/mentors | GET | Get all mentors |
| /api/v1/mentors/mentorId | GET | Get specific mentor |
| /api/v1/sessions | POST | Create session request |
| /api/v1/sessions| GET  | Get all sessions request |
| api/v1/sessions/sessionId/review | POST | Create review |
| /api/v1/sessions/sessionId/review | DELETE | Delete review |

## To run The project
For nodemon use ```npm run dev```
For node use ```npm start```

## To Run test
use ```npm test```

## Built With Java script
Node/Express

### Author
IRAKOZE Pacifique

### LICENSE
ISC License
Copyright (c) 2019 ```IRAKOZE Pacifique```
Open source software
