const XLSX = require('xlsx');


exports.convert_sheet_to_json = filePath =>{
    /*Return JSON object [{},{}]*/
    const workbook = XLSX.readFile(filePath);

    const sheet_name_list = workbook.SheetNames;

    const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

    return xlData;

};


exports.convert_websheet_to_json = url =>{
    var url = "http://oss.sheetjs.com/test_files/formula_stress_test.xlsx";

    /* set up async GET request */
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";

    req.onload = function(e) {
      var data = new Uint8Array(req.response);
      var workbook = XLSX.read(data, {type:"array"});

      /* DO SOMETHING WITH workbook HERE */

    }
};
