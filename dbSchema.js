var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var dbName = 'b30wd';
var dbUrl = `mongodb+srv://Raj2710:Raj2710@raj.x3e0h.mongodb.net/${dbName}`
module.exports = {mongodb,MongoClient,dbUrl}