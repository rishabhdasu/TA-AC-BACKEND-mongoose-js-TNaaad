var app = express();

var userSchema = new Schema({
  name: String,
  email: { type: String, uppercase: true },
  age: { type: (Number = 0) },
  age: { type: Number, default: 0 },
  favorites: [String],
  marks: [Number],
});

var addressSchema = new Schema({
  village: String,
  city: String,
  state: String,
  pin: Number,
  user: Schema.Types.ObjectId,
});

app.listen(4000, () => {
  console.log("Server is listening");
});
