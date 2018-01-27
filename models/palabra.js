// %Word{
//   "word": "aahs",
//   "s_points": 7,
//   "f_points": 6,
//   "in_game": true,
//   "tongue": "English"
// }
var mongoose = require('mongoose');

var palabraSchema = new mongoose.Schema({
  word: {
    type: String,
    required: 'Word cannot be blank!'
  },
  s_points: {
    type: Number,
    min: 0
  },
  f_points: {
    type: Number,
    min: 0
  },
  in_game: {
    type: Boolean,
    default: false
  },
  tongue: {
    type: String,
    default: "English"
  }
}, {
  timestamps: true
});

var Palabra = mongoose.model('Palabra', palabraSchema);

module.exports = Palabra;
