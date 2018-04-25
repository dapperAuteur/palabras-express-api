var express = require('express');
var router = express.Router();
var db = require("../models");
var helpersTags = require("../helpers/helpers_tags");

router.route('/')
  .get(helpersTags.getTags)
  .post(helpersTags.createTag)

router.route('/:tagId')
  .get(helpersTags.getTag)
  .put(helpersTags.updateTag)
  .delete(helpersTags.deleteTag)

module.exports = router;
