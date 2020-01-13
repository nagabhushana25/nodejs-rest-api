var express = require('express');
var router = express.Router();
var metadata_controller = require('../routes/controllers/metadataController');


router.get('/', metadata_controller.displayMetaList);

router.post('/uploadFile', metadata_controller.uploadFile);

module.exports = router;
