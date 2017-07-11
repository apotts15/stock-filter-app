/**
 * Created by apottenger on 7/12/17.
 */
'use strict';

var express = require('express');
var controller = require('./fund.controller');
var router = express.Router();

router.get('/',    controller.index);
router.get('/:id',    controller.getById);

module.exports = router;
