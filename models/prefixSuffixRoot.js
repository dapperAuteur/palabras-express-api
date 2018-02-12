// "word": "a, ac, ad, af, ag, al, an, ap, as, at",
// "meaning": "to, toward, near, in addition to, by",
// "examples": "aside, accompany, adjust, aggression, allocate, annihilate, affix, associate, attend, adverb",
// "type": ""
var mongoose = require('mongoose');

var mongoosePaginate = require('mongoose-paginate');

var prefixSuffixRootSchema = new mongoose.Schema({
  word: {
    type: String,
    required: 'Word cannot be blank!'
  },
  meaning: {
    type: String,
    default: "Please add a definition!"
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

prefixSuffixRootSchema.plugin(mongoosePaginate);

var PrefixSuffixRoot = mongoose.model('PrefixSuffixRoot', prefixSuffixRootSchema);

module.exports = PrefixSuffixRoot;
