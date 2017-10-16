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
    'pornography',
    'tobacco',
    'fossil'
];

var rangeKeys = {
    'max': '$lt',
    'min': '$gt'
};
//
// var filterCategories = function(results) {
//     results.sinStocks = {};
//     results.sinStocks.gunStocks = filterStocks(results);
//     results.sinStocks.alcoholStocks = filterStocks(results);
//     results.sinStocks.gamblingStocks = filterStocks(results);
//     results.sinStocks.alcoholStocks = filterStocks(results);
//     results.sinStocks.pornStocks = filterStocks(results);
//     results.sinStocks.tobaccoStocks = filterStocks(results);
//     results.sinStocks.fossilFuelStocks = filterStocks(results);
//
//     if (results.sinStocks.gunStocks) {
//         console.log('gunStocks via filter', results.gunStocks);
//     }
//     if (results.sinStocks.alcoholStocks) {
//         console.log('alcoholStocks via filter', results.alcoholStocks);
//     }
//     if (results.sinStocks.gamblingStocks) {
//         console.log('gamblingStocks via filter', results.gamblingStocks);
//     }
//     if (results.sinStocks.alcoholStocks) {
//         console.log('alcoholStocks via filter', results.alcoholStocks);
//     }
//     if (results.pornStocks) {
//         console.log('pornStocks via filter', results.pornStocks);
//     }
//     if (results.sinStocks.tobaccoStocks) {
//         console.log('tobaccoStocks via filter', results.tobaccoStocks);
//     }
//     if (results.sinStocks.fossilFuelStocks) {
//         console.log('fossilFuelStocks via filter', results.fossilFuelStocks);
//     }
//
//     return results;
// };

var capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

var gunStocks = ['DKS', 'VSTO', 'SPWH', 'CAB','AOBC', 'RGR', 'OLN', 'WMT', 'BGFV'];
var alcoholStocks = ['MO', 'BUD', 'SAM', 'BF-A', 'STZ', 'BREW', 'DEO', 'LUK', 'TAP', 'WVVI'];
var gamblingStocks = ['ASCA', 'BYI', 'BYD', 'CZR', 'CPHC', 'CNTY', 'CHDN', 'DDE', 'ERI', 'NYNY', 'FLL', 'GLPI', 'IGT', 'IKGH', 'ISLE', 'LVS', 'LACO', 'MPEL', 'MGM', 'MCRI', 'MNTG', 'MGAM', 'UWN', 'PENN', 'PNK', 'SGMS', 'WYNN'];
var pornStocks = ['FFN', 'RICK'];
var tobaccoStocks = ['MO', 'AOI', 'BTI', 'LO', 'PM', 'RAI', 'SWM', 'UVV', 'VGR'];
var fossilFuelStocks = ['PTEN', 'TELL', 'AR', 'CEO', 'CVE', 'CXO', 'ERF', 'HP', 'NBR', 'PBR', 'PBR-A', 'RIG', 'RSPP', 'VET', 'ANDV', 'DK', 'HFC', 'INT', 'MPC', 'PBF', 'PSX', 'PSXP', 'SHI', 'SUN', 'UGP', 'VLO', 'VVV'];

var sdgs = {
    "01": ["MA", "BNS", "K", "AON", "UN", "RIO", "BAK", "KO", "FMS", "SNY"],
    "02": ["MA", "BAK", "ABT", "AGU", "CSX", "LLY", "PHG", "NASDAQ", "SYT", "TECK"],
    "03": ["UN", "SNY", "AZN", "CSX", "LLY", "FDX", "GE", "TTM", "JNJ", "PFE"],
    "04": ["MA", "BCS", "C", "CS", "FLR", "HSBC", "TTM", "MYL", "WMT", "WU"],
    "05": ["MA", "K", "RIO", "KO", "C", "ENB", "GS", "JNJ", "WMT", "XRX"],
    "06": ["UN", "KO", "ABB", "DWDP", "LLY", "F", "GFI", "INTC", "SPGI", "TEVA"],
    "07": ["ABB", "C", "LLY", "E", "TTM", "MYL", "PEP", "PHG", "TECK", "TSLA"],
    "08": ["BAK", "KO", "C", "F", "HPE", "RCL", "STO", "UBS", "UNP", "V"],
    "09": ["UN", "BAK", "AAPL", "MT", "AZN", "CX", "HPE", "SCTY", "TSLA", "VALE"],
    "10": ["UN", "ABT", "BCS", "BBL", "CX", "CL", "F", "GM", "HPE", "UBS"],
    "11": ["MA", "KO", "ABB", "CX", "C", "FDX", "GM", "MYL", "NKE", "NVO"],
    "12": ["UN", "KO", "BUD", "GSK", "GG", "JNJ", "NKE", "PEP", "PHG", "WMT"],
    "13": ["FMS", "AGU", "BUD", "BP", "C", "E", "HSBC", "RDS.A", "STO", "TOT"],
    "14": ["SNY", "AMZN", "AZN", "BAC", "LLY", "E", "TILE", "JNJ", "GMCR", "DIS"],
    "15": ["UN", "ABT", "CPB", "CAT", "GG", "HSBC", "TTM", "STO", "SYT", "XRX"],
    "16": ["MA", "KO", "BBL", "CB", "LLY", "FLR", "GE", "INTC", "MYL", "TM"],
    "17": ["KO", "SNY", "BP", "DWDP", "HSBC", "JNJ", "MYL", "RDS.A", "NASDAQ", "TRIP"],
    "all": ["MA", "UN", "BAK", "KO", "C", "LLY", "HSBC", "TTM", "JNJ", "MYL"]
};

var moneyFormat = function(labelValue) {
    // Nine Zeroes for Billions
    var number =  Math.abs(Number(labelValue)) >= 1.0e+9

        ? Math.abs(Number(labelValue)) / 1.0e+9 + "B"
        // Six Zeroes for Millions
        : Math.abs(Number(labelValue)) >= 1.0e+6

            ? Math.abs(Number(labelValue)) / 1.0e+6 + "M"
            // Three Zeroes for Thousands
            : Math.abs(Number(labelValue)) >= 1.0e+3

                ? Math.abs(Number(labelValue)) / 1.0e+3 + "K"

                : Math.abs(Number(labelValue)) + 'none';

    var numb =  parseFloat(number).toPrecision(2);
    if (numb.indexOf('+') !== -1){
        numb = parseFloat(number).toPrecision(3);
    }

    if (numb == 0 || number == 0) {
        return 0;
    }
    // console.log('number',number);
    // console.log('numb + number',numb + number);
    // console.log('numb + number.replace: ',numb + number.replace(/[^B|M|K]/g,""));

    return numb + number.replace(/[^B|M|K|none]/g,"");
};

var getAllocations = function(tickers, companyAllocation) {
    var stockList = [];

    _.each(tickers, function(ticker){
        var matchingCo = _.find(companyAllocation, function(co) {
            return co.ticker === ticker;
        });
        if (matchingCo) {
            stockList.push(matchingCo);
        }
    });

    return stockList;
};

// input: '1.234%'
// output: .001234
var convertFromPercent = function(perc) {
    var percent = perc.slice(0, perc.length-1)/100;
    return parseFloat(percent);
};

// input: .001234
// output: '1.234%'
var convertToPercent = function(num) {
    return (num * 100).toFixed(2) + '%';
};

var getAllocationNumTotal = function(allocations) {
    var percent = 0;
    _.each(allocations, function(allocation){
        var thisPercent = convertFromPercent(allocation.percent);
        percent += thisPercent;
    });

    return percent;
};

var getAllocationPercentTotal = function(num) {
    return convertToPercent(num);
};

var getAUM = function(fund) {
    return fund.fundBasics && fund.fundBasics.aum && fund.fundBasics.aum.value || null;
};

var getAUMFormated = function(fund) {
    var num = getAUM(fund);
    if (!num) {
        return 'fund ';
    }
    return moneyFormat(num);
};

var _sinfulAumFormated = function(allocationNum, fund) {
    return moneyFormat(allocationNum * getAUM(fund));
};

var getMetal = function(allocationNum) {
    var metal;

    if (allocationNum < 0) {
        metal = 'platinum';
    } else if (allocationNum == 0) {
        metal = 'gold';
    } else if (allocationNum > 0 && allocationNum <= .01 ) {
        metal = 'silver';
    } else if (allocationNum > .01 && allocationNum <= .05 ) {
        metal = 'bronze';
    } else if (allocationNum > .05 ) {
        metal = 'none';
    } else {
        metal = 'gold'; // || 'missed-ranking';
        console.log('!!!' + metal + '!!! ' + allocationNum);
    }

    return metal;
};

var sortResultsAllocationNum = function(results) {
    return _.sortBy(results, function(result){
        return result.sinStocks && result.sinStocks.total && result.sinStocks.total.allocationNum;
    });
};

var getPerformanceReturns = function(object) {
    var returnShort = '10yr';
    var returnLong = '10 year'; // default 10 year
    var returnPercent = '--'; // default 10 year
    var returnNumber = 0;

    if (object.priceTr10YrAnnualized && object.priceTr10YrAnnualized.value) {
        returnShort = '10yr';
        returnLong = '10 year';
        returnNumber = object.priceTr10YrAnnualized.value;
        returnPercent = convertToPercent(returnNumber);
    } else if (object.priceTr5YrAnnualized && object.priceTr5YrAnnualized.value) {
        returnShort = '5yr';
        returnLong = '5 year';
        returnNumber = object.priceTr5YrAnnualized.value;
        returnPercent = convertToPercent(returnNumber);
    } else if (object.priceTr3YrAnnualized && object.priceTr3YrAnnualized.value) {
        returnShort = '3yr';
        returnLong = '3 year';
        returnNumber = object.priceTr3YrAnnualized.value;
        returnPercent = convertToPercent(returnNumber);
    } else if (object.priceTr1Yr && object.priceTr1Yr.value) {
        returnShort = '1yr';
        returnLong = '1 year';
        returnNumber = object.priceTr1Yr.value;
        returnPercent = convertToPercent(returnNumber);
    } else if (object.priceTr3Mo && object.priceTr3Mo.value) {
        returnShort = '3mo';
        returnLong = '3 month';
        returnNumber = object.priceTr3Mo.value;
        returnPercent = convertToPercent(returnNumber);
    } else if (object.priceTr1Mo && object.priceTr1Mo.value) {
        returnShort = '1mo';
        returnLong = '1 month';
        returnNumber = object.priceTr1Mo.value;
        returnPercent = convertToPercent(returnNumber);
    } else {
        returnShort = 'No History';
        returnLong = 'No History';
        returnNumber = 0;
        returnPercent = '--';
    }
    object.returnShort = returnShort;
    object.returnLong = returnLong;
    object.returnPercent = returnPercent;
    object.returnNumber = returnNumber;
};

var updatePerformance = function(objects) {
    return _.each(objects, function(object) {
        getPerformanceReturns(objects);
    });
};

var updateAnalysis = function(responseAnalysis) {
    var analysis = responseAnalysis;
    analysis.risk = convertToPercent(analysis.spread.value);
    return analysis;
};

var filterStocks = function(funds, categoriesToFilterOut) {
    _.each(funds, function(fund) {
        var totalNum = 0;
        var allocationCount = 0;

        fund.performance = updatePerformance(fund.performance);
        fund.analysis = updateAnalysis(fund.analysis);

        _.each(_.keys(fund.sinStocks), function(sin) {
            if (fund.sinStocks[sin] instanceof Object){
                var supportedStocksLength = fund.sinStocks[sin].supportedStocks && fund.sinStocks[sin].supportedStocks.length;
                var sinSupported = supportedStocksLength > 0;
                if (sinSupported) {
                    var supportedSinStocks = fund.sinStocks[sin] && fund.sinStocks[sin].supportedStocks;
                    var allocations = getAllocations(supportedSinStocks, fund.companyAllocation);
                    var allocationNum = getAllocationNumTotal(allocations);
                    var allocationPercent = getAllocationPercentTotal(allocationNum);
                    var aumFormated = getAUMFormated(fund);
                    var sinfulAumFormated = _sinfulAumFormated(allocationNum, fund);

                    totalNum += allocationNum;
                    allocationCount += supportedStocksLength;

                    //sinStock[sin].allocations = allocations;
                    fund.sinStocks[sin].allocationNum = allocationNum;
                    fund.sinStocks[sin].allocationPercent = allocationPercent;
                    fund.sinStocks[sin].aumFormated = aumFormated;
                    fund.sinStocks[sin].sinfulAumFormated = sinfulAumFormated;
                }
            }
        });

        fund.sinStocks.total = {};
        fund.sinStocks.total.allocationPosNeg = totalNum >= 0 ? 'positive' : 'negative';
        fund.sinStocks.total.allocationNum = totalNum;
        fund.sinStocks.total.allocationPercent = getAllocationPercentTotal(totalNum);
        fund.sinStocks.total.allocationAbsoluteNum = Math.abs(totalNum);
        fund.sinStocks.total.allocationAbsolutePercent = getAllocationPercentTotal(Math.abs(totalNum));
        fund.sinStocks.total.aumFormated = getAUMFormated(fund);
        fund.sinStocks.total.totalSinfulAumFormated = _sinfulAumFormated(totalNum, fund);
        fund.sinStocks.total.metal = getMetal(totalNum);
        fund.sinStocks.total.allocationCount = allocationCount;

        // if (fund.ticker === 'ACTX') {
        //     console.log('!!!Fund ACTX!!!');
        //     FundAllocation.get(fund.ticker, function (err, results) {
        //         if (err) {
        //             console.log('FundAllocation get error', err);
        //         } else {
        //             console.log('FundAllocation get results', arguments);
        //             //fund.companyAllocation = results;
        //         }
        //     });
        // }
        // if (i === 0) {
        //     console.log(i, fund.ticker);
        //     // Fund.updateFund(fund.ticker, {sinStock: "test"}, function (err, results) {
        //     //     if (err) {
        //     //         console.log('error in updating Fund', err);
        //     //     } else {
        //     //         console.log('!!fund updated!!');
        //     //     }
        //     // });
        //     //return false;
        // } else if (i >= 1 ) {
        //     return false;
        // }
        //console.log('fund.companies.length', fund.companies.length);
        // var companies = fund.companies;
        // var divestStocks;
        //
        // if (!companies) {
        //     console.log('filterStocks !no companies!');
        //     return false;
        // }
        //
        // _.each(categoryKeys, function(category) {
        //     console.log('category: ', category);
        //     if (category === 'guns') {
        //         divestStocks = gunStocks;
        //     } else if (category === 'alcohol') {
        //         divestStocks = alcoholStocks;
        //     } else if (category === 'gambling') {
        //         divestStocks = gamblingStocks;
        //     } else if (category === 'porn') {
        //         divestStocks = pornStocks;
        //     } else if (category === 'tobacco') {
        //         divestStocks = tobaccoStocks;
        //     } else if (category === 'fossilFuel') {
        //         divestStocks = fossilFuelStocks;
        //     } else {
        //         return false;
        //     }
        //
        //     //var stockList = _.intersection(divestStocks, companies);
        //     var stocksInvestList = _.intersection(companies, divestStocks);
        //
        //     fund.sinStocks['has' + capitalize(category) + 'Stocks'] = stocksInvestList.length > 0;
        //     fund.sinStocks[category] = {
        //         'supportedStocks': stocksInvestList
        //     };
        //
        //     // var stocksDivestList = _.difference(companies, divestStocks);
        //     // fund.sinStocks[category]['divestList'] = stocksDivestList;
        //
        //     if (stocksInvestList) {
        //         console.log(category + ' stocksInvestList via getByCompany', stocksInvestList)
        //     } else {
        //         console.log('No ' + category + ' stocksInvestList via filterStocks');
        //     }
        // });
        //
        // fund.sinStocks['ticker'] = fund.ticker;
        // console.log('fund.sinStocks.ticker', fund.sinStocks.ticker);
        // console.log('sinStocks', fund.sinStocks);
        // var fs = require('fs');
        // //fund.sinStock.ticker = fund.ticker;
        // fs.appendFile("/tmp/sinStock.txt", JSON.stringify(fund.sinStocks) + "\n", function(err) {
        //     if(err) {
        //         return console.log(err);
        //     }
        //
        //     //console.log("SinStock data saved for: ", fund.ticker);
        // });

        return fund;
    });

    // filter Out These Funds
    if (categoriesToFilterOut && categoriesToFilterOut.length > 0) {
        console.log('categoriesToFilterOut', categoriesToFilterOut);

        funds = _.filter(funds, function(fund) {
            var includeFund = true;
            // true means include
            // if (fund.sinStocks.hasGunsStocks) {
            //     console.log('fund.hasGunsStocks: filter out this gun stock fund', fund);
            //     includeFund = false;
            //     return includeFund;
            // }

            _.each(categoriesToFilterOut, function(category) {
                var cat = category;
                if (cat === 'fossil') {
                    cat = 'FossilFuel';
                } else if (cat === 'pornography') {
                    cat = 'Porn';
                } else {
                    cat = capitalize(cat);
                }
                var categoryCheck = 'has' + cat + 'Stocks';

                if (fund.sinStocks[categoryCheck]) {
                    includeFund = false;
                    return includeFund;
                }
            });

            return includeFund;
        });
    }

    return funds;
};

exports.index = function(req, res) {
    console.log('Fund getAll query: ', req.params.id);

    Fund.getAll(function (err, results) {
        if (err) {
            console.log('getAll error', err);
        } else {
            if (!results) {
                res.send([]);
            } else {
                results = sortResultsAllocationNum(results);
                res.send(results);
            }
        }
    });
};

exports.getFunds = function(req, res) {
    var $andFilter = [];
    var id = req.params.id;
    var allFunds = id && id === 'all';
    var categoriesToFilterOut = [];

    if (!_.isEmpty(req.query)) {
        console.log('req.query', req.query);
        _.each(req.query, function(value, key){
            var filter = {};
            var queryArr = key.split('_');
            // fundSize, dividends, returns
            var filterKey = filterKeys[queryArr[0]];
            // guns, porn, alcohol
            var categoryKey = _.indexOf(categoryKeys, queryArr[0]) >= 0 ? queryArr[0] : false;
            // max, min
            var range = rangeKeys[queryArr[1]];

            if (categoryKey) {
                if (value === 'yes') {
                    categoriesToFilterOut.push(categoryKey);
                } else if (value === 'no' || value === 'indeterminate') {

                }
            }

            // if already in the filter obj
            if (filter[filterKey] || categoryKey) {
                return false;
            }

            // no min or max included i.e. {fund: value}
            if (queryArr && queryArr.length === 1) {
                console.log('no min or max included i.e. {fund: value}', value);
                filter[filterKeys[key]] = value;
            } else {
                // min or max included so create new obj i.e. {fund: {min, max}}
                if (!filter[filterKey]) {
                    console.log('min or max included so create new obj i.e. {fund: {min, max}}', value);
                    filter[filterKey] = {};
                    filter[filterKey][range] = value;
                }
            }
            if (value !== 'all') {
                $andFilter.push(filter);
            }
        });

        if ($andFilter && $andFilter.length > 0) {
            console.log('FUNDS: Fund filter on $andFilter: ', $andFilter);
            //'fundBasics.aum.value': { $gt: 28890, $lt: 28890000 } }
            Fund.filter({ $and: $andFilter} , function (err, results) {
                if (err){
                    console.log('error', err);
                } else {
                    if (!results) {
                        console.log('no results');
                        res.send([]);
                    } else {
                        if (categoriesToFilterOut && categoriesToFilterOut.length > 0) {
                            results = filterStocks(results, categoriesToFilterOut);
                        } else {
                            results = filterStocks(results)
                        }

                        results = sortResultsAllocationNum(results);

                        res.send(results);
                    }
                }
            });

        } else {
            if (categoriesToFilterOut && categoriesToFilterOut.length > 0) {
                // filter out explicitly stated values
                getAllFunds(res, categoriesToFilterOut);
            } else {
                // query params were provided but not enough values so filter all values out
                getAllFunds(res, categoryKeys);
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
                console.log('Fund getAll via getAllFunds');
                if (filterOnCategories && filterOnCategories.length > 0) {
                    console.log('Filter all on Category');
                    results = filterStocks(results, filterOnCategories);
                }

                results = sortResultsAllocationNum(results);

                res.send(results);
            }
        }
    });
};

var filterTopFunds = function(results) {
    var sortedTopFund = _.sortBy(results, function(result){
        return result.performance.returnNumber
    });

    console.log('sortedTopFund',sortedTopFund.length);
    return sortedTopFund.reverse().slice(0, 10);
};

exports.getFundsByTicker = function(req, res) {
    var sdgTickerList;
    var id = req.params.id;
    //console.log('sdgId', sdgId);
    console.log('req', id);

    if (id && sdgs[id]) {
        sdgTickerList = sdgs[id];
    }

    console.log('sdgTickerList via getFundsByTicker', sdgTickerList);
    Fund.getFundsByTicker(sdgTickerList, function (err, results) {
        if (err) {
            console.log('error', err);
        } else {
            if (!results) {
                res.send([]);
            } else {
                results = filterStocks(results);
                results = filterTopFunds(results);

                console.log('getFundsByTicker',results.length);
                //console.log(results);
                // if (filterOnCategories && filterOnCategories.length > 0) {
                //     console.log('Filter all on Category');
                //     results = filterStocks(results, filterOnCategories);
                // }
                //
                // results = sortResults(results);

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
            console.log('should never hit getByCompany, FUNDS: Fund.filter + $andFilter: ',$andFilter);
            if (err){
                console.log('error', err);
            } else {
                if (!results) {
                    res.send([]);
                } else {
//                    results = filterCategories(results);

                    results = sortResultsAllocationNum(results);

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
                    results = sortResultsAllocationNum(results);
                    res.send(results);
                }
            }
        });
    }
};
