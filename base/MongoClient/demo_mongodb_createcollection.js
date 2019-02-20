var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root:password@localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("dcmapp");
  dbo.createCollection("orders", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
