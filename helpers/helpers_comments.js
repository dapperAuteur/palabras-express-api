var db = require('../models');

exports.getComments = function (req, res) {
  db.Comment.find()
    .then(function (comments) {
      res.json(comments);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.createComment = function (req, res) {
  db.Comment.create(req.body)
    .then(function (newComment) {
      res.status(201).json(newComment);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.getComment = function (req, res) {
  db.Comment.findById(req.params.commentId)
    .then(function (foundComment) {
      res.json(foundComment);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.updateComment = function (req, res) {
  db.Comment.findOneAndUpdate({ _id: req.params.commentId }, req.body, { new: true })
    .then(function (comment) {
      res.json(comment);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.deleteComment = function (req, res) {
  db.Comment.remove({ _id: req.params.commentId })
    .then(function () {
      res.json({
        message: `Comment ${req.params.commentId} deleted`,
        commentId: req.params.commentId
      });
    })
    .catch(function (err) {
      res.send(err);
    });
}

module.exports = exports;
