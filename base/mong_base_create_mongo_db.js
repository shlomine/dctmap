const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

const uri = 'mongodb://root:password@localhost:27017/dcmapp_Base';
mongoose.connect(uri, { useNewUrlParser: true, "auth": {"authSource": "admin"} })
.then(() => console.log(mongoose.connection.name+" Database created!"))
.catch(err => console.log(err));
// console.log(mongoose.connection.user);
// console.log(mongoose.connection.host);
// console.log(mongoose.connection.port);
// console.log(mongoose.connection.name);

mongoose.connection.close();
