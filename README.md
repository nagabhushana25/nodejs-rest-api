# nodejs-rest-api
Learning nodejs REST API using expressjs and  postgres. This learning project developed without any ORM tools.

Install npm

Initiate nodejs project using below command, a package.json will create and make entries
node init


Install all require packages
npm install bcryptjs cookie-parser cors dotenv express pg validator morgan
npm install --save-dev nodemon





Add .env in project root directory with following variables


DB_HOST=localhost


DB_USER=user


DB_PASS=password


DB_DATABASE=database


DB_PORT=5432


JWT_KEY=key


SERVER_PORT=3000



Run :
DEBUG=node-api-postgres:* npm start

Test in Postman for authenication
