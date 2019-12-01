const jwt = require('jsonwebtoken')

const db = require('./../db/')
require('dotenv').config()


const auth = (req, res, next) => {
        const token = req.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token, process.env.JWT_KEY)
        db.query('SELECT * FROM condat.usertest where user_login = $1 and tokens=$2'
           , [data.id,token]
           ,(error,results)=>{
             console.log(results);
             if (!results) {
               res.status(401).send({ error: 'Not authorized to access this resource'})
             } else {
               req.user = results.rows;
               req.token = token;
               next()
             }
           }
         );
};

module.exports = auth;
