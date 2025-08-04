const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  password: {type: String, required: true},
  avatarUrl: {type: String, default: ""}

},{ timestamps:true});

module.exports = mongoose.model("User",userSchema);

