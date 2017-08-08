var _ = require('underscore');
var mongoose = require('mongoose');
var CompanyFunds = mongoose.model('CompanyFunds');

exports.getById = function(req, res) {

    console.log('req.params.id', req.params.id);

    CompanyFunds.get(req.params.id, function (err, results) {
        if (err){
            console.log('error', err);
        } else {
            if (!results) {
                res.send([]);
            } else {
                console.log('results', results);
                res.send(results);
            }
        }
    });
};

exports.getAll = function(req, res){
    //res.json({success:true, msg: "get by id"});
    //console.log('req', req);
    // var query = {$or: [{"name": /Van/i}, {"symbol": /VO/i}]};
    // query = {"symbol": "VO"};
    CompanyFunds.getAll(function(err, results) {
        if(!err){
            //console.log('results', results);
            res.send(results);
        } else {
            console.log('error', err);
            throw err;
        }
    });
};
