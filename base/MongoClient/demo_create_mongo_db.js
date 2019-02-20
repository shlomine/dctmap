var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root:password@localhost:27017/dcmapp123";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
