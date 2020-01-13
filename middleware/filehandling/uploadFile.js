const multer  = require('multer');
require('dotenv').config()

const tempdir = process.env.TEMP_FILE_DIR;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tempdir)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-"  + file.originalname)
  }
})

 exports.upload = multer({ storage: storage }).single('file');
