require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

/**
 * Database setup
 */
// mongoose.connect(
//   process.env.MONGO_URL,
//   {
//     useNewUrlParser: true
//   }
// );

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

app.use(require("./routes"));

app.listen(3002);

/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://deploy:<password>@cluster0-r5fd3.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
 const collection = client.db("test").collection("devices");
 // perform actions on the collection object
 client.close();
});
uploaddeploy
*/
