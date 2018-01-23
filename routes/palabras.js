var express = require('express');
var router = express.Router();
var db = require("../models");
var helpersPalabras = require("../helpers/helpers_palabras");

router.route('/')
  .get(helpersPalabras.getPalabras)
  .post(helpersPalabras.createPalabra)

router.route('/:palabraId')
  .get(helpersPalabras.getPalabra)
  .put(helpersPalabras.updatePalabra)
  .delete(helpersPalabras.deletePalabra)

module.exports = router;
