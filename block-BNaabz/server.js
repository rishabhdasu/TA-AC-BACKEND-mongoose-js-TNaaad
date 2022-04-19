var express = require("express");
var mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:2701/sample",
  { useNewUrlPasrser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : "Connected to database");
  }
);

var app = express();

app.listen(5000, () => {
  console.log("Server is listening to port 5K");
});
