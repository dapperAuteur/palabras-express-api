var mongoose = require("mongoose");
var User = require("./user");

var transactionSchema = new mongoose.Schema({
  transactionEvent: {
    type: String,
    required: true
  },
  account: {
    type: String,
    required: true
  },
  dateTime: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  details: {
    type: String,
    required: false
  },
  amount: {
    type: Number,
    default: 0,
    required: true
  },
  currency: {
    type: String,
    default: "USD: US Dollars",
    required: true
  },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  currentUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

transactionSchema.pre('save', function (next) {
  var transaction = this;
  if (!transaction.isModified('password'))
  return next();
  bcrypt.hash(transaction.password, 10).then(function (hashedPassword) {
    transaction.password = hashedPassword
    next();
  }, function (err) {
    return next(err)
  });
});

transactionSchema.methods.comparePassword = function (transactionPassword, next) {
  bcrypt.compare(transactionPassword, this.password, function (err, isMatch) {
    if (err) return next(err);
    next(null, isMatch);
  });
};

var Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
