const {upload} = require('../../middleware/filehandling/uploadFile');
const {convert_sheet_to_json} =  require('../../utils/util');
const fs = require('fs');
require('dotenv').config()

const tempdir = process.env.TEMP_FILE_DIR;


exports.displayMetaList = (req,res) =>{

};

exports.uploadFile =  (req, res) => {

    upload(req, res, function(err) {
           if(err){
               console.log(err);
           }

           console.log(convert_sheet_to_json(tempdir+'/'+req.file.fieldname + "-"  + req.file.originalname)[0]);


            res.json({
                'msg': 'File uploaded/import successfully!', 'file': req.file
            });
       });

};
