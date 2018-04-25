var db = require('../models');

exports.getTags = function (req, res) {
  db.Tag.find()
    .then(function (tags) {
      res.json(tags);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.createTag = function (req, res) {
  db.Tag.create(req.body)
    .then(function (newTag) {
      res.status(201).json(newTag);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.getTag = function (req, res) {
  db.Tag.findById(req.params.tagId)
    .then(function (foundTag) {
      res.json(foundTag);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.updateTag = function (req, res) {
  db.Tag.findOneAndUpdate({ _id: req.params.tagId }, req.body, { new: true })
    .then(function (tag) {
      res.json(tag);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.deleteTag = function (req, res) {
  db.Tag.remove({ _id: req.params.tagId })
    .then(function () {
      res.json({
        message: `Tag ${req.params.tagId} deleted`,
        tagId: req.params.tagId
      });
    })
    .catch(function (err) {
      res.send(err);
    });
}

module.exports = exports;
