var express = require('express');
var router = express.Router();
var db = require("../models");
var helpersPrefixSuffixRoots = require("../helpers/helpers_prefixSuffixRoots");

router.route('/')
  .get(helpersPrefixSuffixRoots.getPrefixSuffixRoots)
  .post(helpersPrefixSuffixRoots.createPrefixSuffixRoot)

router.route('/:prefixSuffixRootId')
  .get(helpersPrefixSuffixRoots.getPrefixSuffixRoot)
  .put(helpersPrefixSuffixRoots.updatePrefixSuffixRoot)
  .delete(helpersPrefixSuffixRoots.deletePrefixSuffixRoot)

module.exports = router;
