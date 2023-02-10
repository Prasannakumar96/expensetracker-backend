const { MongoClient } = require("mongodb");

const uri = process.env.uri;

const client = new MongoClient(
  uri,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  { connectTimeoutMS: 30000 },
  { keepAlive: 1 },
  () => console.log("db connected")
);

const database = client.db("test");

exports.users = database.collection("users");
exports.expense = database.collection("expense");