var express = require("express");
var router = express.Router({ mergeParams: true });
var db = require("../models");
var helpersGames = require('../helpers/helpers_games');

// CRUD for games
router.route('/')
  .get(helpersGames.getGames)
  .post(helpersGames.createGames)

router.route('/:gameId')
  .get(helpersGames.getGame)
  .put(helpersGames.updateGame)
  .delete(helpersGames.deleteGame)

module.exports = router;
