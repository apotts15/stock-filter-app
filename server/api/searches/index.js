'use strict';

var express = require('express');
var controller = require('./searches.controller');
var router = express.Router();

router.get('/:id', controller.getById);

module.exports = router;
