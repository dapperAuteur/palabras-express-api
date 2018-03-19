var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/fourLetterWord-api', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});
// mongoose.connect(process.env.MONGODB_URI, {
//   keepAlive: true,
//   reconnectTries: Number.MAX_VALUE,
//   useMongoClient: true
// });

module.exports.FourLetterWord = require("./fourLetterWord");
module.exports.Verbo = require("./verbo");
module.exports.PrefixSuffixRoot = require("./prefixSuffixRoot");
module.exports.User = require("./user");
module.exports.Game = require("./game");
