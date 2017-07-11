'use strict';

var express = require('express');
var mongoose = require('mongoose');
var Fund = mongoose.model('Fund');
var router = express.Router();

exports.getById = function(req, res){
    Fund.get(req.params.id, function (err, doc) {
        if (err) {
            console.error( err );
            res.json({success:false,msg:err});
        }else{
            res.json({success:true,msg:doc});
        }
    });
};

module.exports = router;
