var db = require('../models');

exports.getPrefixSuffixRoots = function (req, res) {
  db.PrefixSuffixRoot.find()
    .then(function (prefixSuffixRoots) {
      res.json(prefixSuffixRoots);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.createPrefixSuffixRoot = function (req, res) {
  db.PrefixSuffixRoot.create(req.body)
    .then(function (newPrefixSuffixRoot) {
      res.status(201).json(newPrefixSuffixRoot);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.getPrefixSuffixRoot = function (req, res) {
  db.PrefixSuffixRoot.findById(req.params.prefixSuffixRootId)
    .then(function (foundPrefixSuffixRoot) {
      res.json(foundPrefixSuffixRoot);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.updatePrefixSuffixRoot = function (req, res) {
  db.PrefixSuffixRoot.findOneAndUpdate({ _id: req.params.prefixSuffixRootId }, req.body, { new: true })
    .then(function (prefixSuffixRoot) {
      res.json(prefixSuffixRoot);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.deletePrefixSuffixRoot = function (req, res) {
  db.PrefixSuffixRoot.remove({ _id: req.params.prefixSuffixRootId })
    .then(function () {
      res.json({ message: "PrefixSuffixRoot Deleted!" });
    })
    .catch(function (err) {
      res.send(err);
    });
}

module.exports = exports;
