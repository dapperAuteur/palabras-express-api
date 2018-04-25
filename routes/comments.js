var express = require('express');
var router = express.Router();
var db = require("../models");
var helpersComments = require("../helpers/helpers_comments");

router.route('/')
  .get(helpersComments.getComments)
  .post(helpersComments.createComment)

router.route('/:commentId')
  .get(helpersComments.getComment)
  .put(helpersComments.updateComment)
  .delete(helpersComments.deleteComment)

module.exports = router;
