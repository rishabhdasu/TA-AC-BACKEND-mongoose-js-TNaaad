var express = require("express");
var mogoose = require("mongoose");
var Schema = mogoose.Schema;

var app = express();

var userSchema = new Schema({
  email: { type: String, uppercase: true },
  age: { type: (Number = 0) },
});

app.listen(4000, () => {
  console.log("Server is listening");
});
