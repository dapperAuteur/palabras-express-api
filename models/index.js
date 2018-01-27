var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/palabra-api', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

module.exports.Palabra = require("./palabra");
module.exports.Verbo = require("./verbo");
module.exports.PrefixSuffixRoot = require("./prefixSuffixRoot");
module.exports.User = require("./user");
module.exports.Game = require("./game");
