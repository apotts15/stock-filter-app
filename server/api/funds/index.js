'use strict';

var express = require('express');
var controller = require('./funds.controller');
var router = express.Router();

router.get('/',    controller.index);
router.get('/:id',    controller.getById);

module.exports = router;
