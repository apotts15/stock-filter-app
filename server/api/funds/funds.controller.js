var _ = require('underscore');
var mongoose = require('mongoose');
var Fund = mongoose.model('Fund');

exports.index = function(req, res){
    //console.log('req.params.id', req.params.id);

    Fund.getAll(function (err, results) {
        if (err){
            console.log('error', err);
        } else {
            if (!results) {
                res.send([]);
            } else {
                //console.log('results', results);
                res.send(results);
            }
        }
    });
};

exports.getById = function(req, res){
    res.json({success:true,msg:"get by id"});
};

exports.getByCompany = function(req, res) {
    console.log('params', req.query);
    var filterKeys = {
        'fundSize': 'fundBasics.aum.value',
        'dividend': 'fundamentals.dividendYield.value',
        'returns': 'performance.priceTr5YrAnnualized.value',
        'risk': 'fundBasics.spreadPct.value',
        'expense': 'fundBasics.expenseRatio.value',
        'category': 'classification.category',
        'focus': 'classification.focus',
        'brand': 'classification.brand',
        'niche': 'classification.niche',
        'strategy': 'classification.strategy',
        'weightingScheme': 'classification.weightingScheme',
        'selectionCriteria': 'classification.selectionCriteria'
    };

    var rangeKeys = {
        'max': '$lt',
        'min': '$gt'
    };
    var $andFilter = [];

    if(req.params.id) {
        $andFilter.push({"companies": { $in: [req.params.id] }});
    }

    if (req.query) {
        _.each(req.query, function(value, key){
            var filter = {};
            console.log('value', value);
            console.log('key', key);
            var q = key.split('_');
            var filterKey = filterKeys[q[0]];
            var range = rangeKeys[q[1]];

            if (filter[filterKeys[q[0]]]) {
                return false;
            }

            if (q.length === 1) {
                filter[filterKeys[key]] = value;
            } else {
                if (!filter[filterKey]) {
                    filter[filterKey] = {};
                    filter[filterKey][range] = value;
                }
            }
            if (value !== 'all') {
                $andFilter.push(filter);
            }
        });

        //'fundBasics.aum.value': { $gt: 28890, $lt: 28890000 } }
        console.log('$andFilter', $andFilter);
        Fund.getByCompanyFilter($andFilter, function (err, results) {
            if (err){
                console.log('error', err);
            } else {
                if (!results) {
                    res.send([]);
                } else {
                    //console.log('results', results);
                    res.send(results);
                }
            }
        });
    } else {
        Fund.getByCompany(req.params.id, function (err, results) {
            if (err){
                console.log('error', err);
            } else {
                if (!results) {
                    res.send([]);
                } else {
                    //console.log('results', results);
                    res.send(results);
                }
            }
        });
    }
};