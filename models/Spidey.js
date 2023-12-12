let client = require('../dbConnection');

let collection = client.db().collection('Spidermans');

function postSpiderman(spider, callback) {
    collection.insertOne(spider,callback);
}

function getAllSpideys(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postSpiderman,getAllSpideys}