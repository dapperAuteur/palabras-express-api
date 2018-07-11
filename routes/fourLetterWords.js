var express = require('express');
var router = express.Router();
var db = require("../models");
var helpersFourLetterWords = require("../helpers/helpers_four_letter_words");

router.route('/')
  .get(helpersFourLetterWords.getFourLetterWords)
  .post(helpersFourLetterWords.createFourLetterWord)

router.route('/:fourLetterWordId')
  .get(helpersFourLetterWords.getFourLetterWord)
  .put(helpersFourLetterWords.updateFourLetterWord)
  .delete(helpersFourLetterWords.deleteFourLetterWord)

router.route('/words/:word')
  .get(helpersFourLetterWords.getWord)

module.exports = router;
