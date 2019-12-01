var express = require('express');
var router = express.Router();
const auth = require('./../middleware/auth');

var product_controller = require('../routers/controllers/productController');

router.get('/' ,auth , product_controller.displayProduct);
router.post('/create',auth ,product_controller.createProduct);

module.exports = router;
