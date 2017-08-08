var _ = require('underscore');
var mongoose = require('mongoose');
var Search = mongoose.model('Search');

exports.getBySymbol = function(req, res) {

    //console.log('req.params.id', req.params.id);

    Search.get(req.params.id, function (err, results) {
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
    //res.json({success:true,msg:"get by id"});
    //console.log('req', req);
    // var query = {$or: [{"name": /Van/i}, {"symbol": /VO/i}]};
    // query = {"symbol": "VO"};
    Search.getAll(function(err, results) {
        if(!err){
            //console.log('results', results);
            res.send(results);
        } else {
            console.log('error', err);
            throw err;
        }
    });

    //+ req.query.key +
    // Search.find(query, function(err, results) {
    //     if (err) throw err;
    //
    //     console.log('results',results);
    //     // var data=[];
    //     // for(var i = 0;i < rows.length; i++) {
    //     //     data.push(rows[i].token);
    //     // }
    //     res.json(results);
    // });
};
