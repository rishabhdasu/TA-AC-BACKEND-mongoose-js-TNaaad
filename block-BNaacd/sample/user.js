var express = require("express");
var mogoose = require("mongoose");
var Schema = mogoose.Schema;

var app = express();

var userSchema = new Schema({
  name: String,
  email: { type: String, uppercase: true },
  age: { type: Number, default: 0 },
});

app.listen(4000, () => {
  console.log("Server is listening");
});
