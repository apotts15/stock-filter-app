/*global OnePebbleApp, Backbone*/

OnePebbleApp.Models = OnePebbleApp.Models || {};

(function () {
    'use strict';

    OnePebbleApp.Models.Fund = Backbone.Model.extend({

        initialize: function () {
        },

        url: function() {
            return 'fund/' + this.get('ticker')
        },

        defaults: {
            _id: '',
            productId: '',
            fund: '',
            ticker: '',
            inceptionDate: '',
            launchDate: '',
            hasSegmentReport: '',
            genericReport: '',
            hasReport: '',
            fundsInSegment: '',
            economicDevelopment: '',
            totalRows: '',
            fundBasics: {
                issuer: '',
                expenseRatio: {
                    value: ''
                },
                aum: {
                    value: ''
                },
                spreadPct: {
                    value: ''
                },
                segment: ''
            },
            performance: {
                priceTrAsOf: '',
                priceTr1MopriceTr1Mo: {
                    value: ''
                },
                priceTr3Mo: {
                    value: ''
                },
                priceTr1Yr: {
                    value: ''
                },
                priceTr3YrAnnualized: {
                    value: ''
                },
                priceTr5YrAnnualized: {
                    value: ''
                },
                priceTr10YrAnnualized: {
                    value: ''
                }
            },
            analysis: {
                analystPick: '',
                opportunitiesList: '',
                letterGrade: '',
                efficiencyScore: '',
                tradabilityScore: '',
                fitScore: '',
                leveragedFactor: '',
                exposureReset: '',
                avgDailyDollarVolume: '',
                avgDailyShareVolume: '',
                spread: {
                    value: ''
                },
                fundClosureRisk: ''
            },
            fundamentals: {
                dividendYield: {
                    value: ''
                },
                equity: {
                    pe: '',
                    pb: ''
                },
                fixedIncome: {
                    duration: '',
                    creditQuality: '',
                    ytm: {
                        value: ''
                    }
                }
            },
            classification: {
                assetClass: '',
                strategy: '',
                region: '',
                geography: '',
                category: '',
                focus: '',
                niche: '',
                inverse: '',
                leveraged: '',
                etn: '',
                selectionCriteria: '',
                weightingScheme: '',
                activePerSec: '',
                underlyingIndex: '',
                indexProvider: '',
                brand: ''
            },
            tax: {
                legalStructure: '',
                maxLtCapitalGainsRate: '',
                maxStCapitalGainsRate: '',
                taxReporting: ''
            },
            msciEsg: {
                msciEsgQualityScore: '',
                msciEsgQualityScorePctlPeer: '',
                msciEsgQualityScorePctlGlobal: '',
                msciWeightedAvgCarbonInten: '',
                msciSustainableImpactPct: '',
                msciSriExclusionCriteriaPct: '',
                msciEsgHasBadge: ''
            },
            companies: [],
            companyAllocation: [],
            gunStocks: [],
            sinStocks: {}
        },

        // categoryKeys: [
        //     'guns',
        //     'alcohol',
        //     'gambling',
        //     'porn',
        //     'tobacco',
        //     'fossilFuel'
        // ],
        //
        // isSupportedSinStock: function(sin, sinStock) {
        //     var sinfulCheckString = 'has' + this.capitalize(sin) + 'Stocks';
        //     var sinStocks = this.get('sinStocks') || sinStock || null;
        //
        //     if (!sinStocks) {
        //         debugger;
        //         console.log('no sinStocks!');
        //         return false;
        //     }
        //
        //     // is in data and is a supported category
        //     return sinStocks[sinfulCheckString] && _.indexOf(this.categoryKeys, sin) >= 0;
        // },
        //
        // capitalize: function (string) {
        //     return string.charAt(0).toUpperCase() + string.slice(1);
        // },
        //
        // // sin is a string and checked by isSupportedSinStock
        // getSinStocks: function (sin, sinStock) {
        //     var stockList = [];
        //     var sinStocks = this.get('sinStocks') || sinStock || null;
        //
        //     if (!sinStocks) {
        //         console.log('no sinStocks!');
        //         return false;
        //     }
        //
        //     if (this.isSupportedSinStock(sin)) {
        //         stockList = sinStocks[sin].supportedStocks;
        //     }
        //
        //     return stockList;
        // },
        //
        // // tickers Array of tickers
        // getAllocations: function(tickers) {
        //     var stockList = [];
        //     var companyAllocation = this.get('companyAllocation');
        //
        //     _.each(tickers, function(ticker){
        //         var matchingCo = _.find(companyAllocation, function(co) {
        //             return co.ticker === ticker;
        //         });
        //         if (matchingCo) {
        //             stockList.push(matchingCo);
        //         }
        //     });
        //
        //     return stockList;
        // },
        //
        // // input: '1.234%'
        // // output: .001234
        // convertFromPercent: function(perc) {
        //     var percent = perc.slice(0, perc.length-1)/100;
        //     return parseFloat(percent);
        // },
        //
        // // input: .001234
        // // output: '1.234%'
        // convertToPercent: function(num) {
        //     return num * 100 + '%';
        // },
        //
        // getAllocationNumTotal: function(allocations) {
        //     var percent = 0;
        //     var that = this;
        //     _.each(allocations, function(allocation){
        //         var thisPercent = that.convertFromPercent(allocation.percent);
        //         console.log(thisPercent);
        //         percent += thisPercent;
        //     });
        //
        //     return percent;
        // },
        //
        // getAllocationPercentTotal: function(num) {
        //     return this.convertToPercent(num);
        // },
        //
        // getAUM: function() {
        //     var fundBasics = this.get('fundBasics');
        //     return fundBasics && fundBasics.aum && fundBasics.aum.value || null;
        // },
        //
        // getAUMFormated: function() {
        //     var num = this.getAUM();
        //     if (!num) {
        //         return 'fund ';
        //     }
        //     return this.getFormated(num);
        // },
        //
        // getFormated: function (num) {
        //     return this.moneyFormat(num)
        // },
        //
        // sinfulAumFormated: function(allocationNum) {
        //     return this.getFormated(allocationNum * this.getAUM());
        // },
        //
        // moneyFormat: function(num) {
        //     // Nine Zeroes for Billions
        //     var number =  Math.abs(num) >= 1.0e+9
        //
        //         ? Math.abs(num) / 1.0e+9 + "B"
        //         // Six Zeroes for Millions
        //         : Math.abs(num) >= 1.0e+6
        //
        //             ? Math.abs(num) / 1.0e+6 + "M"
        //             // Three Zeroes for Thousands
        //             : Math.abs(num) >= 1.0e+3
        //
        //                 ? Math.abs(num) / 1.0e+3 + "K"
        //
        //                 : Math.abs(num);
        //
        //     var numb =  parseFloat(number).toPrecision(2);
        //     if (numb.indexOf('+') !== -1){
        //         numb = parseFloat(number).toPrecision(3);
        //     }
        //
        //     if (numb == 0 || number == 0) {
        //         return 0;
        //     }
        //
        //     return numb + number.replace(/[^B|M|K]/g,"");
        // },
        //
        // setSinStockInfo: function(sinStock) {
        //     var that = this;
        //     debugger;
        //     _.each(_.keys(sinStock), function(sin) {
        //         if (sinStock[sin] instanceof Object){
        //             var sinSupported = that.isSupportedSinStock(sin, sinStock);
        //             if (sinSupported) {
        //                 var supportedSinStocks = sinStock[sin] && sinStock[sin].supportedStocks;
        //                 var allocations = that.getAllocations(supportedSinStocks);
        //                 var allocationNum = that.getAllocationNumTotal(allocations);
        //                 var allocationPercent = that.getAllocationPercentTotal(allocationNum);
        //                 var aumFormated = that.getAUMFormated();
        //                 var sinfulAumFormated = that.sinfulAumFormated(allocationNum);
        //
        //                 //sinStock[sin].allocations = allocations;
        //                 sinStock[sin].allocationNum = allocationNum;
        //                 sinStock[sin].allocationPercent = allocationPercent;
        //                 sinStock[sin].aumFormated = aumFormated;
        //                 sinStock[sin].sinfulAumFormated = sinfulAumFormated;
        //             }
        //         }
        //     })
        // },

        parse: function (response) {
            this.set({
                _id: response._id,
                productId: response.productId,
                fund: response.fund,
                ticker: response.ticker,
                inceptionDate: response.inceptionDate,
                launchDate: response.launchDate,
                hasSegmentReport: response.hasSegmentReport,
                genericReport: response.genericReport,
                hasReport: response.hasReport,
                fundsInSegment: response.fundsInSegment,
                economicDevelopment: response.economicDevelopment,
                totalRows: response.totalRows,
                fundBasics: response.fundBasics,
                performance: response.performance,
                analysis: response.analysis,
                fundamentals: response.fundamentals,
                classification: response.classification,
                tax: response.tax,
                msciEsg: response.msciEsg,
                companies: response.companies,
                companyAllocation: response.companyAllocation,
                gunStocks: response.gunStocks,
                categoryData: response.categoryData,
                //sinStocks: this.setSinStockInfo(response.sinStocks)
                sinStocks: response.sinStocks
            });

            return response;
        }
    });

})();
