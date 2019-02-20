var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root:password@localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("dcmapp_Cellcom");
  var myobj = [
    { fName: 'John', lName: 'Hannah', company: 'Private', role: 'test', phone: '0508678766', email: 'shlomine@gmail.com', description: 'Test'},
    { fName: 'Joh1', lName: 'Hanna1', company: 'Privat1', role: 'tes1', phone: '0508678767', email: 'shlomin1@gmail.com', description: 'Tes1'}
  ];
  dbo.collection("contacts").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
