// {
//   "id": 3,
//   "spanish": "aceptar",
//   "english": "to accept",
//   "reflexive": false,
//   "grupo": 0
// }
var mongoose = require('mongoose');
const slugify = require('@sindresorhus/slugify');

var mongoosePaginate = require('mongoose-paginate');

var verboSchema = new mongoose.Schema({
  spanish: {
    type: String,
    required: true,
  },
  spanishSlug: {
    type: String,
    default: "",
    required: true,
  },
  english: {
    type: String,
    default: ""
  },
  englishSlug: {
    type: String,
    default: "",
    required: true,
  },
  reflexive: {
    type: Boolean,
    default: false
  },
  irregular: {
    type: Boolean,
    default: false
  },
  categoría_de_irregular: {
    type: String,
    default: ""
  },
  cambiar_de_irregular: {
    type: String,
    default: ""
  },
  terminación: {
    type: String,
    default: "-ar"
  },
  grupo: {
    type: Number,
    min: 0,
    default: 0
  }
}, {
  timestamps: true
});

verboSchema.pre('save', function (next) {
  let verbo = this;
  if (!verbo.isModified('spanish') || verbo.spanishSlug === "") return next();
  slugify('spanish').then(function (spanishSlug) {
    verbo.spanishSlug = spanishSlug
    next();
  }, function (err) {
    return next(err)
  });
});

verboSchema.plugin(mongoosePaginate);

var Verbo = mongoose.model('Verbo', verboSchema);

module.exports = Verbo;
