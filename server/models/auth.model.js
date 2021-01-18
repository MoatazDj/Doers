const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    avatar: {
      type: String,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "Normal",
    },
    resetPasswordLink: {
      data: String,
      default: "",
    },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("user", userSchema);
