var express = require('express');
var router = express.Router();
var db = require("../models");
var helpersUsers = require("../helpers/helpers_users");

router.route('/')
  .get(helpersUsers.getUsers)

router.route('/:userId')
  .get(helpersUsers.getUser)
  .put(helpersUsers.updateUser)
  .delete(helpersUsers.deleteUser)

module.exports = router;
