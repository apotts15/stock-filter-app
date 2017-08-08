'use strict';

var express = require('express');
var controller = require('./funds.controller');
var router = express.Router();

router.get('/',    controller.index);
router.get('/company/:id', controller.getByCompany);

module.exports = router;
