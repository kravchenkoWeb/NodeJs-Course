const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db;

const connect = callback => {
    MongoClient.connect('mongodb+srv://user:<password>@cluster0.bxha3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true })
    .then(client => {
        console.log('connected');
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
}

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw 'No db found';
}

exports.mongoConnect = connect;
exports.getDb = getDb;