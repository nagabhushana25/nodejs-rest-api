const db =require('../../db/index');
const {security} = require('../../middleware/keyhash');
const User = require('../../db/queries/users');
const {upload} = require('../../middleware/filehandling/uploadFile');
//const multer  = require('multer');
//const excelToJson = require('convert-excel-to-json');
const {convert_sheet_to_json} =  require('../../utils/util');
const fs = require('fs');

exports.displayUsersList = (req,res) => {

  const user = new User();

  db.query(user.selectALL()
  ,(error, results)=>{
    if (error) {
      throw error
    }
    res.send(results.rows)
  })

};


exports.displayUserDetail = (req,res) => {

  const id = parseInt(req.params.id)

  const user = new User();

  db.query(user.selectAUser(id)
    ,(error, results)=>{
      if (error) {
        throw error
      }
     res.status(200).json(results.rows)
     //res.send(results.rows)
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

  const user = User();

  db.query(
          user.selectAUserLogin(user_login)
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
