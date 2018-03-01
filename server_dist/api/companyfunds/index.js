'use strict';

var express = require('express');
var controller = require('./companyfunds.controller');
var router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);

module.exports = router;
