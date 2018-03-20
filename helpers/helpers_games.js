var db = require('../models');

exports.getGames = function (req, res, next) {
  db.Game.find().sort({ createdAt: 'desc' })
    .populate("userId", { username: true, profileImageUrl: true })
    .then(function (games) {
      res.json(games);
    }).catch(function (err) {
      res.status(500).json(err);
    });
}

exports.createGame = function (req, res, next) {
  const newGame = {
    attempts: req.body.attempts,
    bulls: req.body.bulls,
    cows: req.body.cows,
    guesses: req.body.guesses,
    userId: req.params.id,
    score: req.body.score,
    winning_word: req.body.winning_word,
    won: req.body.won
  };

  db.Game.create(newGame).then(function (game) {
    db.User.findById(req.params.id).then(function (user) {
      user.games.push(game.id)
      user.save().then(function (user) {
        return db.Game.findById(game._id)
          .populate("userId", { username: true, profileImageUrl: true })
      }).then(function (m) {
        return res.status(200).json(m);
      }).catch(next);
    }).catch(next);
  }).catch(next);
};

exports.getGame = function (req, res) {
  db.Game.findById(req.params.gameId)
    .then(function (foundGame) {
      res.json(foundGame);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.updateGame = function (req, res) {
  db.Game.findOneAndUpdate({ _id: req.params.gameId }, req.body, { new: true })
    .then(function (game) {
      res.json(game);
    })
    .catch(function (err) {
      res.send(err);
    });
}

exports.deleteGame = function (req, res) {
  db.Game.remove({ _id: req.params.gameId })
    .then(function () {
      res.json({
        message: `Game ${req.params.gameId} deleted`,
        gameId: req.params.gameId
      });
    })
    .catch(function (err) {
      res.send(err);
    });
}

module.exports = exports;
