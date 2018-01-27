var express = require("express");
var router = express.Router();
var db = require("../models");
var jwt = require("jsonwebtoken");
var helpersAuth = require("../helpers/helpers_auth");

router.post('/signin', helpersAuth.signin);
router.post('/signup', helpersAuth.signup);

module.exports = router;
