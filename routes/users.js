var express = require('express');
var router = express.Router();

var user_controller = require('../routers/controllers/userController')


router.get('/', user_controller.displayUsersList);

router.get('/:id', user_controller.displayUserDetail);


router.post('/create',user_controller.createUser);

router.post('/login',user_controller.loginUser);

router.put('/:id',user_controller.updateUser);

router.delete('/:id',user_controller.deleteUser);


module.exports = router;
