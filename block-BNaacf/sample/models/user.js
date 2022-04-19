var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    email: { type: String, uppercase: true },
    age: { type: (Number = 0) },
    age: { type: Number, default: 0 },
    favorites: [String],
    marks: [Number],
  },
  { timestamps: true }
);
