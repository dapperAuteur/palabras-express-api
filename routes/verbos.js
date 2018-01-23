var express = require('express');
var router = express.Router();
var db = require("../models");
var helpersVerbos = require("../helpers/helpers_verbos");

router.route('/')
  .get(helpersVerbos.getVerbos)
  .post(helpersVerbos.createVerbo)

router.route('/:verboId')
  .get(helpersVerbos.getVerbo)
  .put(helpersVerbos.updateVerbo)
  .delete(helpersVerbos.deleteVerbo)

module.exports = router;
