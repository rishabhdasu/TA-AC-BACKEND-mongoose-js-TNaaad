let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let articleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: [String],
    createdAt: { type: Date, default: new Date() },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);
