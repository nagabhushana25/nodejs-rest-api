# nodejs-rest-api
Learning nodejs REST API using expressjs and  postgres. This learning project developed without any ORM tools.

Install npm

Initiate nodejs project using below command, a package.json will create and make entries
node init


Install all require packages
npm install bcryptjs cookie-parser cors dotenv express pg validator morgan
npm install --save-dev nodemon

package.json will get updated as below

"dependencies": {
  "bcryptjs": "^2.4.3",
  "cookie-parser": "^1.4.4",
  "cors": "^2.8.5",
  "dotenv": "^8.2.0",
  "express": "^4.17.1",
  "morgan": "^1.9.1",
  "pg": "^7.14.0",
  "validator": "^12.1.0"
},
"devDependencies": {
  "nodemon": "^2.0.1"
}


Run :
DEBUG=node-api-postgres:* npm start

Test in Postman for authenication
