var _ = require('underscore');
var mongoose = require('mongoose');

var FundAllocation = mongoose.model('FundAllocation');

exports.getFundAllocation = function(req, res) {
    //console.log('Fund getAll query: ', req.params.id);

    FundAllocation.getAll(function (err, results) {
        console.log('!!FundAllocation.getAll!!');
        if (err) {
            console.log('error', err);
        } else {
            if (!results) {
                console.log('no results');
                res.send([]);
            } else {
                console.log('results', results);
                res.send(results);
            }
        }
    });
};
