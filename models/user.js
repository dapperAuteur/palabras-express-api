var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

// var mongoosePaginate = require('mongoose-paginate');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: Number,
    required: true,
    default: 3,
    min: 0
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
  }],
  guesses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FourLetterWord'
  }]
}, {
  timestamps: true
});

userSchema.pre('save', function (next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, 10).then(function (hashedPassword) {
    user.password = hashedPassword
    next();
  }, function (err) {
    return next(err)
  });
});

// userSchema.plugin(mongoosePaginate);

userSchema.methods.comparePassword = function (candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if(err) return next(err);
    next(null, isMatch);
  });
};

var User = mongoose.model('User', userSchema);
module.exports = User;
