var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fourLetterWord-api', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});
// mongoose.connect(process.env.MONGODB_URI, {
//   keepAlive: true,
//   reconnectTries: Number.MAX_VALUE,
//   useMongoClient: true
// });

module.exports.Comment = require("./comment");
module.exports.FourLetterWord = require("./fourLetterWord");
module.exports.Game = require("./game");
module.exports.Post = require("./post");
module.exports.PrefixSuffixRoot = require("./prefixSuffixRoot");
module.exports.Tag = require("./tag");
module.exports.Transaction = require("./transaction");
module.exports.User = require("./user");
module.exports.Verbo = require("./verbo");
