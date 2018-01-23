var db = require('../models');

exports.getPalabras = function (req, res) {
  db.Palabra.find()
    .then(function (palabras) {
      res.json(palabras);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.createPalabra = function (req, res) {
  db.Palabra.create(req.body)
    .then(function (newPalabra) {
      res.status(201).json(newPalabra);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.getPalabra = function (req, res) {
  db.Palabra.findById(req.params.palabraId)
    .then(function (foundPalabra) {
      res.json(foundPalabra);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.updatePalabra = function (req, res) {
  db.Palabra.findOneAndUpdate({ _id: req.params.palabraId }, req.body, { new: true })
    .then(function (palabra) {
      res.json(palabra);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.deletePalabra = function (req, res) {
  db.Palabra.remove({ _id: req.params.palabraId })
    .then(function () {
      res.json({ message: "Palabra Deleted!"});
    })
    .catch(function (err) {
      res.send(err);
    });
}

module.exports = exports;
