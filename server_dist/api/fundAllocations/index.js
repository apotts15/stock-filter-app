'use strict';

var express = require('express');
var controller = require('./fundAllocations.controller');
var router = express.Router();

router.get('/',  controller.getFundAllocation);

module.exports = router;
