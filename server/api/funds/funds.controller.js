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

var categoryKeys = [
    'guns',
    'alcohol',
    'gambling',
    'porn',
    'tobacco',
    'fossilFuel'
];

var rangeKeys = {
    'max': '$lt',
    'min': '$gt'
};

var filterCategories = function(results) {
    results.sinStocks = {};
    results.sinStocks.gunStocks = filterStocks(results, 'guns');
    results.sinStocks.alcoholStocks = filterStocks(results, 'alcohol');
    results.sinStocks.gamblingStocks = filterStocks(results, 'gambling');
    results.sinStocks.alcoholStocks = filterStocks(results, 'alcohol');
    results.sinStocks.pornStocks = filterStocks(results, 'porn');
    results.sinStocks.tobaccoStocks = filterStocks(results, 'tobacco');
    results.sinStocks.fossilFuelStocks = filterStocks(results, 'fossilFuel');

    if (results.sinStocks.gunStocks) {
        console.log('gunStocks via filter', results.gunStocks);
    }
    if (results.sinStocks.alcoholStocks) {
        console.log('alcoholStocks via filter', results.alcoholStocks);
    }
    if (results.sinStocks.gamblingStocks) {
        console.log('gamblingStocks via filter', results.gamblingStocks);
    }
    if (results.sinStocks.alcoholStocks) {
        console.log('alcoholStocks via filter', results.alcoholStocks);
    }
    if (results.pornStocks) {
        console.log('pornStocks via filter', results.pornStocks);
    }
    if (results.sinStocks.tobaccoStocks) {
        console.log('tobaccoStocks via filter', results.tobaccoStocks);
    }
    if (results.sinStocks.fossilFuelStocks) {
        console.log('fossilFuelStocks via filter', results.fossilFuelStocks);
    }

    return results;
};

var capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

var gunStocks = ['DKS', 'VSTO', 'SPWH', 'CAB','AOBC', 'RGR', 'OLN', 'WMT', 'BGFV'];
var alcoholStocks = ['MO', 'BUD', 'SAM', 'BF-A', 'STZ', 'BREW', 'DEO', 'LUK', 'TAP', 'WVVI'];
var gamblingStocks = ['ASCA', 'BYI', 'BYD', 'CZR', 'CPHC', 'CNTY', 'CHDN', 'DDE', 'ERI', 'NYNY', 'FLL', 'GLPI', 'IGT', 'IKGH', 'ISLE', 'LVS', 'LACO', 'MPEL', 'MGM', 'MCRI', 'MNTG', 'MGAM', 'UWN', 'PENN', 'PNK', 'SGMS', 'WYNN'];
var pornStocks = ['FFN', 'RICK'];
var tobaccoStocks = ['MO', 'AOI', 'BTI', 'LO', 'PM', 'RAI', 'SWM', 'UVV', 'VGR'];
var fossilFuelStocks = ['PTEN', 'TELL', 'AR', 'CEO', 'CVE', 'CXO', 'ERF', 'HP', 'NBR', 'PBR', 'PBR-A', 'RIG', 'RSPP', 'VET', 'ANDV', 'DK', 'HFC', 'INT', 'MPC', 'PBF', 'PSX', 'PSXP', 'SHI', 'SUN', 'UGP', 'VLO', 'VVV'];


// todo category should now be categories since it's an array of categories and not a single category string
var filterStocks = function(funds, categories) {
    console.log('funds.length', funds.length);
    _.each(funds, function(fund) {
        //console.log('fund.companies.length', fund.companies.length);
        var companies = fund.companies;
        var divestStocks;

        if (!companies) {
            console.log('filterStocks !no companies!');
            return false;
        }

        console.log('categories', categories);
        _.each(categories, function(category) {
            if (category === 'guns') {
                divestStocks = gunStocks;
            } else if (category === 'alcohol') {
                divestStocks = alcoholStocks;
            } else if (category === 'gambling') {
                divestStocks = gamblingStocks;
            } else if (category === 'porn') {
                divestStocks = pornStocks;
            } else if (category === 'tobacco') {
                divestStocks = tobaccoStocks;
            } else if (category === 'fossilFuel') {
                divestStocks = fossilFuelStocks;
            } else {
                return false;
            }

            //var stockList = _.intersection(divestStocks, companies);
            var stocksInvestList = _.intersection(companies, divestStocks);
            var stocksDivestList = _.difference(companies, divestStocks);
            fund.sinStocks[category] = {};
            fund.sinStocks[category]['investList'] = stocksInvestList;
            fund.sinStocks[category]['divestList'] = stocksDivestList;
            fund.sinStocks[category]['hasSinStocks'] = stocksInvestList.length > 0;


            if (stocksInvestList) {
                console.log(category + ' stocksInvestList via getByCompany', stocksInvestList)
            } else {
                console.log('No ' + category + ' stocksInvestList via filterStocks');
            }

            if (stocksDivestList) {
                console.log(category + ' stocksDivestList via filterStocks', stocksDivestList)
            } else {
                console.log('No ' + category + ' stocksInvestList via filterStocks');
            }
        });

        // _.each(categories, function(category) {
        //     fund.sinStocks[]
        // });

        return fund;
    });

    return funds;
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
    var categoriesChoosen = [];

    if (!_.isEmpty(req.query)) {
        console.log('req.query', req.query);
        _.each(req.query, function(value, key){
            var filter = {};
            var queryArr = key.split('_');
            // fundSize, dividends, returns
            var filterKey = filterKeys[queryArr[0]];
            // guns, porn, alcohol
            var categoryKey = _.indexOf(categoryKeys, queryArr[0]) >= 0 ? queryArr[0] : false;
            console.log('categoryKey',categoryKey);
            // max, min
            var range = rangeKeys[queryArr[1]];

            if (categoryKey) {
                categoriesChoosen.push(categoryKey);
            }

            // if already in the filter obj
            if (filter[filterKey] || categoryKey) {
                return false;
            }

            // no min or max included i.e. {fund: value}
            if (queryArr && queryArr.length === 1 && range) {
                filter[filterKeys[key]] = value;
            } else {
                // min or max included so create new obj i.e. {fund: {min, max}}
                if (!filter[filterKey]) {
                    filter[filterKey] = {};
                    filter[filterKey][range] = value;
                }
            }

            $andFilter.push(filter);
        });
        console.log('FUNDS: Fund.filter + $andFilter: ', $andFilter);

        if ($andFilter && $andFilter.length > 0) {
            //'fundBasics.aum.value': { $gt: 28890, $lt: 28890000 } }
            Fund.filter({ $and: $andFilter} , function (err, results) {

                console.log('Fund filter on $andFilter');
                if (err){
                    console.log('error', err);
                } else {
                    if (!results) {
                        console.log('no results');
                        res.send([]);
                    } else {
                        if (categoriesChoosen && categoriesChoosen.length > 0) {
                            results = filterCategories(results, categoriesChoosen);
                        }

                        // send response
                        res.send(results);
                    }
                }
            });

        } else {
            if (categoriesChoosen && categoriesChoosen.length > 0) {
                getAllFunds(res, categoriesChoosen);
            }
        }
    } else {
        getAllFunds(res);
    }
};

var getAllFunds = function(res, filterOnCategories) {

    Fund.getAll(function (err, results) {
        if (err) {
            console.log('error', err);
        } else {
            if (!results) {
                res.send([]);
            } else {
                console.log('Fund getAll');
                if (filterOnCategories && filterOnCategories.length > 0) {
                    console.log('Filter all on Category');
                    results = filterStocks(results, filterOnCategories);
                }
                res.send(results);
            }
        }
    });
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

            if (q && q.length === 1) {
                filter[filterKeys[key]] = value;
            } else {
                if (!filter[filterKey]) {
                    filter[filterKey] = {};
                    filter[filterKey][range] = value;
                }
            }

            $andFilter.push(filter);

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
                    results = filterCategories(results);

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
