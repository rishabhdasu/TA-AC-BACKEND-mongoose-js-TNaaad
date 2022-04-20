let express = require("express");
let mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/sample",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : "connected to db");
  }
);

let app = express();

app.get("/", (req, res) => {
  res.send("Index Page");
});

app.listen(3000, () => {
  console.log("Server listening on port 3k");
});
