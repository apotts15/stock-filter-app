/**
 * Created by apottenger on 7/12/17.
 */
'use strict';

var express = require('express');
var controller = require('./fund.controller');
var router = express.Router();

router.get('/:id', controller.getBySymbol);

module.exports = router;
