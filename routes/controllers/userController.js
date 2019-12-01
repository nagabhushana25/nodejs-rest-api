const db =require('../../db/');
const {security} = require('../../middleware/keyhash');


exports.displayUsersList = (req,res) => {

  db.query('select user_id,user_login  from condat.usertest'
  ,(error, results)=>{
    if (error) {
      throw error
    }
    res.send(results.rows)
  })

};


exports.displayUserDetail = (req,res) => {

  const id = parseInt(req.params.id)

  db.query(
    'select * from condat.usertest where user_id=$1'
    ,[id]
    ,(error, results)=>{
      if (error) {
        throw error
      }
     //res.status(200).json(results.rows)
     res.send(results.rows)
  })
};


exports.createUser =  (req,res) => {

  const {user_login,user_password} = req.body

  var secureAPI = new security(user_password,user_login);

  const hashPassword =  secureAPI.getHash();

  const token =  secureAPI.getToken();

  db.query('insert into condat.usertest(user_login,user_password,tokens) \
  values($1, $2, $3)'
  ,[user_login, hashPassword, token]
  ,(error, results)=>{
    if (error) {
      throw error
    }
    res.send(results.rows)
  });

};

exports.loginUser = (req,res) => {

  const {user_login,user_password} = req.body

  var secureAPI = new security(user_password,user_login);

  db.query(
          'select * from condat.usertest where user_login=$1'
          ,[user_login]
          ,(error, results)=>{
            if (!results) {
              throw new Error({ error: 'Invalid login credentials' })
            } else {



              if (!secureAPI.isPasswordMatch(results.rows[0].user_password) ) {
                res.status(401).send({ error: 'Not authorized to access this resource'})
              } else {
                const token = secureAPI.getToken()
                //res.status(201).send({ results.rows[0], token })
                //res.json({user:results.rows[0], token: token});
                res.json(results.rows);
              }

            }
          }
  )
};

exports.updateUser = (req,res) => {

};

exports.deleteUser = (req,res) => {

};
