// "word": "a, ac, ad, af, ag, al, an, ap, as, at",
// "meaning": "to, toward, near, in addition to, by",
// "examples": "aside, accompany, adjust, aggression, allocate, annihilate, affix, associate, attend, adverb",
// "type": ""
var mongoose = require('mongoose');

var prefixSuffixRootSchema = new mongoose.Schema({
  word: {
    type: String,
    required: 'Word cannot be blank!'
  },
  meaning: {
    type: String,
  },
  examples: {
    type: String
  },
  type: {
    type: String
  },
  tongue: {
    type: String,
    default: "English"
  }
},{
  timestamps: true
});

var PrefixSuffixRoot = mongoose.model('PrefixSuffixRoot', prefixSuffixRootSchema);

module.exports = PrefixSuffixRoot;
