/*
* Description: dcmapp logs module
* Writen by : Shlomi Nechmad (HPE) - 050-8678766
*/

/*
 * dependencies
 */
var config = require('../config/config.js'),
logging = require('../modules/logging.js');
fs = require('fs');

/*
 * public methods
 */
exports.logMessage = function(msg) {
    var d = new Date();
    msg = d.toISOString().split('T').join(' ').split('Z').join('')+"\t"+msg;
    console.log(msg);

    if (fs.existsSync(config.files.log) == 'false') {
        fs.writeFileSync(config.files.log, msg+"\r\n");
    } else {
        fs.appendFileSync(config.files.log, msg+"\r\n");
    };
};
