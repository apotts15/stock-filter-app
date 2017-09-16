var _ = require('underscore');
var mongoose = require('mongoose');
var Fund = mongoose.model('Fund');

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

var filterGunStocks = function(data) {
    var companies = data.companies;

    if(!companies) {
        return null;
    }

    // Dick's Sporting Goods: DKS (NYSE)
    // Smith & Wesson (American Outdoor Brands Corp): AOBC (NASDAQ)
    // Vista Outdoors: VSTO (NYSE)
    // Sportman's Warehouse: SPWH (NASDAQ)
    // Cabela's: CAB (NYSE)
    // Ruger: RGR (NYSE)
    // Olin: OLN (NYSE)
    // Walmart: WMT (NYSE)
    // Big 5: BGFV (NASDAQ)

    var gunStocks = ['DKS', 'AOBC', 'VSTO', 'SPWH', 'CAB', 'RGR', 'OLN', 'WMT', 'BGFV'];
    var gunStockList = _.intersection(gunStocks, companies);

    if (gundStockList) {
        console.log('GUN STOCKS via getByCompany', gunStockList)
    }else{
        console.log('No Gun Stocks via getByCompany');
    }

    return gunStockList;
};

exports.index = function(req, res) {
    console.log('Fund getAll query: ', req.params.id);

    Fund.getAll(function (err, results) {
        if (err) {
            console.log('error', err);
        } else {
            if (!results) {
                res.send([]);
            } else {
                res.send(results);
            }
        }
    });
};

exports.getFunds = function(req, res) {
    var $andFilter = [];
    var id = req.params.id;
    var allFunds = id && id === 'all';

    if (!_.isEmpty(req.query)) {
        console.log('req.query', req.query);
        _.each(req.query, function(value, key){
            var filter = {};
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
        console.log('FUNDS: Fund.filter + $andFilter: ', $andFilter);

        //'fundBasics.aum.value': { $gt: 28890, $lt: 28890000 } }
        Fund.filter({ $and: $andFilter} , function (err, results) {
            if (err){
                console.log('error', err);
            } else {
                if (!results) {
                    console.log('no results');
                    res.send([]);
                } else {
                    results.gunStocks = filterGunStocks(results);
                    if (results.gunStocks) {
                        console.log('gunStocks via filter', results.gunStocks);
                    }
                    console.log('filter with gunstocks');
                    res.send(results);
                }
            }
        });
    } else {
        console.log('Fund getAll');
        Fund.getAll(function (err, results) {
            if (err) {
                console.log('error', err);
            } else {
                if (!results) {
                    res.send([]);
                } else {
                    res.send(results);
                }
            }
        });
    }
};

exports.getByCompany = function(req, res) {
    var $andFilter = [];

    if(req.params.id && req.params.id !== 'all') {
        console.log('Company ID provided! via getByCompany', req.params.id);
        $andFilter.push({"companies": { $in: [req.params.id] }});
    }

    if (req.query) {
        _.each(req.query, function(value, key){
            var filter = {};
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
        Fund.filter($andFilter, function (err, results) {
            console.log('FUNDS: Fund.filter + $andFilter: ',$andFilter);
            if (err){
                console.log('error', err);
            } else {
                if (!results) {
                    res.send([]);
                } else {
                    results.gunStocks = filterGunStocks(results);
                    if (results.gunStocks) {
                        console.log('gunStocks via getByCompany', results.gunStocks);
                    }
                    res.send(results);
                }
            }
        });
    } else {
        Fund.getByCompany(req.params.id, function (err, results) {
            console.log('FUNDS: Fund.getByCompany + id: ', req.params.id);
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
