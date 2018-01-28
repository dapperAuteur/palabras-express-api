var db = require('../models');

exports.getFourLetterWords = function (req, res) {
  db.FourLetterWord.find()
    .then(function (fourLetterWords) {
      res.json(fourLetterWords);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.createFourLetterWord = function (req, res) {
  db.FourLetterWord.create(req.body)
    .then(function (newFourLetterWord) {
      res.status(201).json(newFourLetterWord);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.getFourLetterWord = function (req, res) {
  db.FourLetterWord.findById(req.params.fourLetterWordId)
    .then(function (foundFourLetterWord) {
      res.json(foundFourLetterWord);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.updateFourLetterWord = function (req, res) {
  db.FourLetterWord.findOneAndUpdate({ _id: req.params.fourLetterWordId }, req.body, { new: true })
    .then(function (fourLetterWord) {
      res.json(fourLetterWord);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.deleteFourLetterWord = function (req, res) {
  db.FourLetterWord.remove({ _id: req.params.fourLetterWordId })
    .then(function () {
      res.json({ message: "FourLetterWord Deleted!"});
    })
    .catch(function (err) {
      res.send(err);
    });
}

module.exports = exports;
