var db = require('../models');

exports.getVerbos = function (req, res) {
  db.Verbo.find()
    .then(function (verbos) {
      console.log(verbos);
      log.info(verbos);
      res.json(verbos);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.createVerbo = function (req, res) {
  db.Verbo.create(req.body)
    .then(function (newVerbo) {
      res.status(201).json(newVerbo);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.getVerbo = function (req, res) {
  db.Verbo.findById(req.params.verboId)
    .then(function (foundVerbo) {
      res.json(foundVerbo);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.updateVerbo = function (req, res) {
  db.Verbo.findOneAndUpdate({ _id: req.params.verboId }, req.body, { new: true })
    .then(function (verbo) {
      res.json(verbo);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.deleteVerbo = function (req, res) {
  db.Verbo.remove({ _id: req.params.verboId })
    .then(function () {
      res.json({
        message: `Verbo ${req.params.verboId} deleted`,
        verboId: req.params.verboId
      });
    })
    .catch(function (err) {
      res.send(err);
    });
}

module.exports = exports;
