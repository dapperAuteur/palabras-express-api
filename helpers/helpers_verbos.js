var db = require('../models');

exports.getVerbos = function (req, res) {
  try {
    db.Verbo.find()
      .then(function (verbos) {
        res.json(verbos);
      })

  } catch (e) {
    console.log(e);
      res.send(e);
  }
  // db.Verbo.find()
  //   .then(function (verbos) {
  //     console.log("getVerbos 2");
  //     res.json(verbos);
  //   })
  //   .catch(function (err) {
  //     res.send(err);
  //   });
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

exports.getVerboBySpanish = function (req, res) {
  db.Verbo.findOne({ 'spanishSlug': req.params.verboSpanishSlug })
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
