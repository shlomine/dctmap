var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root:password@localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("dcmapp_Base");
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
