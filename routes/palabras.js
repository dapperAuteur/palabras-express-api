var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/palabras");

router.route('/')
  .get(helpers.getPalabras)
  .post(helpers.createPalabras)

router.route('/:palabraId')
  .get(helpers.getPalabra)
  .put(helpers.updatePalabra)
  .delete(helpers.deletePalabra)

module.exports = router;
