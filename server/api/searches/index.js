'use strict';

var express = require('express');
var controller = require('./searches.controller');
var router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getBySymbol);

module.exports = router;
