// %Word{
//   "word": "aahs",
//   "s_points": 7,
//   "f_points": 6,
//   "in_game": true,
//   "tongue": "English"
// }
var mongoose = require('mongoose');

var fourLetterWordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: 'Word cannot be blank!'
  },
  definition: {
    type: String
  },
  s_points: {
    type: Number,
    min: 0
  },
  f_points: {
    type: Number,
    min: 0
  },
  tier: {
    type: Number,
    min: 0,
    default: 3
  },
  in_game: {
    type: Boolean,
    default: true
  },
  tongue: {
    type: String,
    default: "English"
  }
}, {
  timestamps: true
});

var FourLetterWord = mongoose.model('FourLetterWord', fourLetterWordSchema);

module.exports = FourLetterWord;
