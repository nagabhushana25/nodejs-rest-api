const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

var security = function(userRawPassword,userLogin){
   this.userRawPassword = userRawPassword;
   this.key = process.env.JWT_KEY;
   this.userLogin = userLogin;
}

security.prototype.getHash = function(){
  return bcrypt.hashSync(this.userRawPassword, 8)
}


security.prototype.isPasswordMatch = function(hashPassword){
  return bcrypt.compareSync(this.userRawPassword, hashPassword)
}

security.prototype.getToken = function(){
  return jwt.sign({id:this.userLogin}, this.key)
}

security.prototype.isTokenVerifiable = function(token){
  return jwt.verify(token, this.key)
}



module.exports ={
  security
}
