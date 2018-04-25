var express = require('express');
var router = express.Router();
var db = require("../models");
var helpersPosts = require("../helpers/helpers_posts");

router.route('/')
  .get(helpersPosts.getPosts)
  .post(helpersPosts.createPost)

router.route('/:postId')
  .get(helpersPosts.getPost)
  .put(helpersPosts.updatePost)
  .delete(helpersPosts.deletePost)

module.exports = router;
