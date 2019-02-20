var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root:password@localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("dcmapp");
  var myobj = [
    { _id: 1, product_id: 154, status: 1},
    { _id: 2, product_id: 155, status: 2},
    { _id: 3, product_id: 156, status: 3}
  ];
  dbo.collection("orders").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});
