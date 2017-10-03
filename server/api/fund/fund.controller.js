/**
 * Created by apottenger on 7/12/17.
 */
var _ = require('underscore');
var mongoose = require('mongoose');
var Fund = mongoose.model('Fund');

exports.getBySymbol = function(req, res) {

    console.log('Fund getBySymbol req.params.id: ', req.params.id);

    Fund.get(req.params.id, function (err, results) {
        if (err){
            console.log('error', err);
        } else {
            if (!results) {
                res.send([]);
            } else {
                results.categoryData = categorize(results);
                results.gunStocks = filterGunStocks(results);

                results = filterStocks(results);

                res.send(results);
            }
        }
    });
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
        metal = 'none'
    } else {
        metal = 'missed-ranking' + allocationNum;
        console.log('!!!' + metal + '!!!');
    }

    return metal;
};

var filterStocks = function(fund) {
    var totalNum = 0;
    _.each(_.keys(fund.sinStocks), function(sin) {
        if (fund.sinStocks[sin] instanceof Object){
            var sinSupported = fund.sinStocks[sin].supportedStocks.length > 0;
            if (sinSupported) {
                var supportedSinStocks = fund.sinStocks[sin] && fund.sinStocks[sin].supportedStocks;
                var allocations = getAllocations(supportedSinStocks, fund.companyAllocation);
                var allocationNum = getAllocationNumTotal(allocations);
                var allocationPercent = getAllocationPercentTotal(allocationNum);
                var aumFormated = getAUMFormated(fund);
                var sinfulAumFormated = _sinfulAumFormated(allocationNum, fund);

                totalNum += allocationNum;

                fund.sinStocks[sin].allocations = allocations;
                fund.sinStocks[sin].allocationNum = allocationNum;
                fund.sinStocks[sin].allocationPercent = allocationPercent;
                fund.sinStocks[sin].aumFormated = aumFormated;
                fund.sinStocks[sin].sinfulAumFormated = sinfulAumFormated;
            }
        }
    });
    fund.sinStocks.total = {};
    fund.sinStocks.total.allocationNum = totalNum;
    fund.sinStocks.total.allocationPercent = getAllocationPercentTotal(totalNum);
    fund.sinStocks.total.aumFormated = getAUMFormated(fund);
    fund.sinStocks.total.totalSinfulAumFormated = _sinfulAumFormated(totalNum, fund);
    fund.sinStocks.total.metal = getMetal(totalNum);

    return fund;
};

var percentFormat = function(percent, reverse) {
    var multiplier = reverse ? .01 : 100;
    return (percent * multiplier).toFixed(2) + '%';
};

var doLeveling = function(cat, metric) {
    var leveling = {
        1: 'very-low',
        2: 'low',
        3: 'medium',
        4: 'high',
        5: 'very-high'
    };
    var ruleSet;
    var levelScore;

    if (metric === null || metric === undefined || !metric) {
        return 'no-data';
    }

    _.each(leveling, function(item){
        ruleSet = categories.categories[cat][item].rules;
        // >= min && <= max

        if (!ruleSet.min) {
            if (metric <= ruleSet.max) {
                levelScore = item;
            }
        }

        if (!ruleSet.max) {
            if (metric >= ruleSet.min) {
                levelScore = item;
            }
        }

        if (metric >= ruleSet.min && metric <= ruleSet.max) {
            levelScore = item;
        }
    });

    if (!levelScore) {
        levelScore = 'unknown';
    }

    return levelScore;
};

var categorize = function(data) {
    var leveling = {
        1: 'very-low',
        2: 'low',
        3: 'medium',
        4: 'high',
        5: 'very-high'
    };

    var metrics = {
        fundSize: data.fundBasics.aum.value,
        dividend: data.fundamentals.dividendYield.value,
        returns: data.performance.priceTr5YrAnnualized.value,
        risk: data.fundBasics.spreadPct.value,
        expense: data.fundBasics.expenseRatio.value
    };

    var formatUnit = function(metric, unit) {
        var formattedString = metric;
        if (unit === 'money') {
            formattedString = moneyFormat(metric)
        } else if (unit === 'percent') {
            formattedString = percentFormat(metric)
        } else if (unit === 'reversePercent') {
            formattedString = percentFormat(metric, true)
        }
        return formattedString;
    };

    var formatString = function(string, metric) {
        return string.replace(/{}/i, metric);
    };

    var formatDescription = function(cat, unit) {
        return formatString(categories.categories[cat][doLeveling(cat, metrics[cat])].description, formatUnit(metrics[cat], unit));
    };

    var leveling = {
        fundSize: doLeveling('fundSize', metrics['fundSize']),
        dividend: doLeveling('dividend', metrics['dividend']),
        returns: doLeveling('returns', metrics['returns']),
        risk: doLeveling('risk', metrics['risk']),
        expense: doLeveling('expense', metrics['expense'])
    };

    var descriptions = {
        region: {
            description: categories.categories.region.description,
            name: categories.categories.region.name
        },
        fundSize: {
            description: formatDescription('fundSize', 'money'),
            name: categories.categories.fundSize[leveling.fundSize].name,
            level: leveling.fundSize
        },
        dividend: {
            description: formatDescription('dividend', 'percent'),
            name: categories.categories.dividend[leveling.dividend].name,
            level: leveling.dividend
        },
        returns: {
            description: formatDescription('returns', 'percent'),
            name: categories.categories.returns[leveling.returns].name,
            level: leveling.returns
        },
        risk: {
            description: formatDescription('risk', 'percent'),
            name: categories.categories.risk[leveling.risk].name,
            level: leveling.risk
        },
        expense: {
            description: formatDescription('expense', 'reversePercent'),
            name: categories.categories.expense[leveling.expense].name,
            level: leveling.expense
        }
    };

    return descriptions;
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

    console.log('GUN STOCKS ', gunStockList);

    return gunStockList;
};

// t[Math.round((t.length -1) *.6)]
//"rule": "<129 >=85"
var categories = {
    "categories": {
        "region": {
            "name": "US Stocks",
            "description": "Primarily North American stocks."
        },
        "fundSize": {
            "very-high": {
                "name": "Very Big Fund",
                "description": "Fund holds {} in assets, larger than 80% of all funds.",
                "rules": {
                    "max": null,
                    "min": 1111881808
                }
            },
            "high": {
                "name": "Big Fund",
                "description": "Fund holds {} in assets, larger than 60% of all funds.",
                "rules": {
                    "max": 1111881807,
                    "min": 252517087
                }

            },
            "medium": {
                "name": "Medium Fund",
                "description": "Fund holds {} in assets, in the middle 20% of all funds.",
                "rules": {
                    "max": 252517086,
                    "min": 61229740
                }
            },
            "low": {
                "name": "Low Fund",
                "description": "Fund holds {} in assets, lower than 60% of all funds.",
                "rules": {
                    "max": 61229739,
                    "min": 11563500
                }
            },
            "very-low": {
                "name": "Very Low Fund",
                "description": "Fund holds {} in assets, lower than 80% of all funds.",
                "rules": {
                    "max": 11563499,
                    "min": null
                }
            },
            "no-data": {
                "name": "Not enough info to",
                "description": "No enough data to make a determination",
                "rules": {
                    "max": null,
                    "min": null
                }
            }
        },
        "returns": {
            "very-high": {
                "name": "Very High 5Y Return",
                "description": " Fund has annualized 5Y returns of {}, higher than 80% of all funds.",
                "rules": {
                    "max": null,
                    "min": 0.161686
                }
            },
            "high": {
                "name": "High 5Y Return",
                "description": "Fund has annualized 5Y returns of {}, higher than 60% of all funds.",
                "rules": {
                    "max": 0.161685,
                    "min": 0.14433
                }
            },
            "medium": {
                "name": "Medium 5Y Return",
                "description": "Fund has annualized 5Y returns of {}, in the middle 20% of all funds.",
                "rules": {
                    "max": 0.14432,
                    "min": 0.086795
                }
            },
            "low": {
                "name": "Low 5Y Return",
                "description": "Fund has annualized 5Y returns of {}, lower than 60% of all funds.",
                "rules": {
                    "max": 0.086794,
                    "min": 0.004832
                }
            },
            "very-low": {
                "name": "Very Low 5Y Return",
                "description": "Fund has annualized 5Y returns of {}, lower than 80% of all funds.",
                "rules": {
                    "max": 0.004831,
                    "min": null
                }
            },
            "no-data": {
                "name": "Not enough info to",
                "description": "No enough data to make a determination",
                "rules": {
                    "max": null,
                    "min": null
                }
            }
        },
        "risk": {
            "very-high": {
                "name": "Very High Risk",
                "description": "Standard deviation of monthly risk is {}, higher than 80% of all funds.",
                "rules": {
                    "max": null,
                    "min": 0.004079
                }
            },
            "high": {
                "name": "High Risk",
                "description": "Standard deviation of monthly risk is {}, higher than 60% of all funds.",
                "rules": {
                    "max": 0.004078,
                    "min": 0.002374
                }
            },
            "medium": {
                "name": "Medium Risk",
                "description": "Standard deviation of monthly risk is {}, in the middle 20% of all funds.",
                "rules": {
                    "max": 0.002373,
                    "min": 0.001385
                }
            },
            "low": {
                "name": "Low Risk",
                "description": "Standard deviation of monthly risk is {}, lower than 60% of all funds.",
                "rules": {
                    "max": 0.001384,
                    "min": 0.000571
                }
            },
            "very-low": {
                "name": "Very Low Risk",
                "description": "Standard deviation of monthly risk is {}, lower than 80% of all funds.",
                "rules": {
                    "max": 0.00056,
                    "min": null
                }
            },
            "no-data": {
                "name": "Not enough info to",
                "description": "No enough data to make a determination",
                "rules": {
                    "max": null,
                    "min": null
                }
            }
        },
        "expense": {
            "very-high": {
                "name": "Very High Expense",
                "description": "Annual expense ratio is {}, higher than 80% of all funds.",
                "rules": {
                    "max": null,
                    "min": 129
                }
            },
            "high": {
                "name": "High Expense",
                "description": "Annual expense ratio is {}, higher than 60% of all funds.",
                "rules": {
                    "max": 128,
                    "min": 85
                }
                //"rule": "<129 >=85"
            },
            "medium": {
                "name": "Medium Expense",
                "description": "Annual expense ratio is {}, in the middle 20% of all funds.",
                "rules": {
                    "max": 84,
                    "min": 53
                }
            },
            "low": {
                "name": "Low Expense",
                "description": "Annual expense ratio is {}, lower than 60% of all funds.",
                "rules": {
                    "max": 52,
                    "min": 25
                }
            },
            "very-low": {
                "name": "Very Low Expense",
                "description": "Annual expense ratio is {}, lower than 80% of all funds.",
                "rules": {
                    "max": 24,
                    "min": null
                }
            },
            "no-data": {
                "name": "Not enough info to",
                "description": "No enough data to make a determination",
                "rules": {
                    "max": null,
                    "min": null
                }
            }
        },
        "dividend": {
            "very-high": {
                "name": "Very High Dividend",
                "description": "Annual dividend yield is {}, higher than 80% of all funds.",
                "rules": {
                    "max": null,
                    "min": 0.031228
                }
            },
            "high": {
                "name": "High Dividend",
                "description": "Annual dividend yield is {}, higher than 60% of all funds.",
                "rules": {
                    "max": 0.031227,
                    "min": 0.01966
                }
            },
            "medium": {
                "name": "Medium Dividend",
                "description": "Annual dividend yield is {}, in the middle 20% of all funds.",
                "rules": {
                    "max": 0.01965,
                    "min": 0.014384
                }
            },
            "low": {
                "name": "Low Dividend",
                "description": "Annual dividend yield is {}, lower than 60% of all funds.",
                "rules": {
                    "max": 0.014383,
                    "min": 0.009239
                }
            },
            "very-low": {
                "name": "Very Low Dividend",
                "description": "Annual dividend yield is {}, lower than 80% of all funds.",
                "rules": {
                    "max": 0.009238,
                    "min": null
                }
            },
            "no-data": {
                "name": "Not enough info to",
                "description": "No enough data to make a determination",
                "rules": {
                    "max": null,
                    "min": null
                }
            }
        }
    }
};
