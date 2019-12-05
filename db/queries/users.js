const {security} = require('../../middleware/keyhash');
require('dotenv').config()

db_schema = process.env.DB_SCHEMA;
tablename = db_schema+'.usertest';

var user = function(){
};


user.prototype.selectALL = () =>{
  return {text:`select user_id,user_login  from ${tablename}`};
};


user.prototype.selectAUserID = (iUserLogId) =>{
  return {text:`select user_id,user_login  from ${tablename} \
                where user_id=$1`
          ,values:[iUserLogId]
         };
};


user.prototype.selectAUserLogin = (iUserLogIn) =>{
  return {text:`select user_id,user_login  from ${tablename} \
                where user_login=$1`
          ,values:[iUserLogId]
         };
};


user.prototype.insert = (iUser) =>{

  //const user_login = iUser.user_login
  //const user_password= iUser.user_password

  var secureAPI = new security(iUser.user_password,iUser.user_login);

  const hashPassword =  secureAPI.getHash();

  const token =  secureAPI.getToken();

  return {text:`insert into ${tablename}(user_login,user_password,tokens) +
                VALUES($1,$2,$3)`
          ,values: [iUser.user_login,hashPassword,token]
         };
};


user.prototype.updatePassword = (iUser) =>{

  var secureAPI = new security(iUser.user_password,iUser.user_login);

  const hashPassword =  secureAPI.getHash();

  return {text:`update ${tablename} +
                  SET user_password=$2 +
                WHERE user_login = $1`
          ,values: [iUser.user_login,hashPassword]
         };
};


user.prototype.updateNonPasswordFieds = (iUser) =>{

  return {text:`update ${tablename} +
                  SET name=$2 +
                WHERE user_login = $1`
          ,values: [iUser.name]
         };
};


module.exports = user;
