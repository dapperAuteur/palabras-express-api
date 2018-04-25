var express = require('express');
var router = express.Router();
var db = require("../models");
var helpersTransactions = require("../helpers/helpers_transactions");

router.route('/')
  .get(helpersTransactions.getTransactions)
  .post(helpersTransactions.createTransaction)

router.route('/:transactionId')
  .get(helpersTransactions.getTransaction)
  .put(helpersTransactions.updateTransaction)
  .delete(helpersTransactions.deleteTransaction)

module.exports = router;
