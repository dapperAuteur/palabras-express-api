var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var userSchema = new mongoose.userSchema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profileImageUrl: {
    type: String
  },
  games: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  }]
}, {
  timestamps: true
});
