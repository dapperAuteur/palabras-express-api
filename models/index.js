var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/palabra-api')

mongoose.Promise = Promise;

module.exports.Palabra = require("./palabra");
module.exports.Verbo = require("./verbo");
module.exports.PrefixSuffixRoot = require("./prefixSuffixRoot")
