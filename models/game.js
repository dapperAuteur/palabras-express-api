var mongoose = required("mongoose");
var User = require("./user");

var gameSchema = new mongoose.gameSchema({
  attempts: {
    type: Number,
    required: true,
    default: 0,
    min: 0
  },
  bulls: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 4
  },
  cows: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 4
  },
  guesses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Palabra',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  score: {
    type: Number,
    required: true,
    default: 0
  },
  winning_word: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Palabra',
  },
  won: {
    type: Boolean,
    required: true,
    default: false
  },
  word_to_consider_for_library: {
    type: Array
  }
}, {
  timestamps: true
});

gameSchema.pre('remove', function (next) {
  User.findById(this.userId).then(user => {
    user.games.remove(this.id);
    user.save().then(function (e) {
      next();
    });
  }).catch(function (err) {
    next(err);
  });
});

var Game = mongoose.model('Game', gameSchema);
module.exports = Game;
