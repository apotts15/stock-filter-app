/*global StockFilterApp, Backbone*/

StockFilterApp.Models = StockFilterApp.Models || {};

(function () {
    'use strict';

    StockFilterApp.Models.Fund = Backbone.Model.extend({

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
                returnShort: '',
                returnLong: '',
                returnPercent: '',
                priceTr1MopriceTr1Mo: {
                    value: '',
                    percent: ''
                },
                priceTr3Mo: {
                    value: '',
                    percent: ''
                },
                priceTr1Yr: {
                    value: '',
                    percent: ''
                },
                priceTr3YrAnnualized: {
                    value: '',
                    percent: ''
                },
                priceTr5YrAnnualized: {
                    value: '',
                    percent: ''
                },
                priceTr10YrAnnualized: {
                    value: '',
                    percent: ''
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

        // input: '1.234%'
        // output: .001234
        // convertFromPercent: function(perc) {
        //     var percent = perc.slice(0, perc.length-1)/100;
        //     return parseFloat(percent);
        // },
        //
        // // input: .001234
        // // output: '1.234%'
        // convertToPercent: function(num) {
        //     return (num * 100).toFixed(2) + '%';
        // },

        // getReturnYear: function(object) {
        //     var yearShort = '10yr';
        //     var yearLong = '10 year'; // default 10 year
        //     var yearPercent = '--'; // default 10 year
        //
        //     if (object.priceTr10YrAnnualized && object.priceTr10YrAnnualized.value) {
        //         yearShort = '10yr';
        //         yearLong = '10 year';
        //         yearPercent = this.convertToPercent(object.priceTr10YrAnnualized.value);
        //     } else if (object.priceTr5YrAnnualized && object.priceTr5YrAnnualized.value) {
        //         yearShort = '5yr';
        //         yearLong = '5 year';
        //         yearPercent = this.convertToPercent(object.priceTr5YrAnnualized.value);
        //     } else if (object.priceTr3YrAnnualized && object.priceTr3YrAnnualized.value) {
        //         yearShort = '3yr';
        //         yearLong = '3 year';
        //         yearPercent = this.convertToPercent(object.priceTr3YrAnnualized.value);
        //     } else if (object.priceTr1Yr && object.priceTr1Yr.value) {
        //         yearShort = '1yr';
        //         yearLong = '1 year';
        //         yearPercent = this.convertToPercent(object.priceTr1Yr.value);
        //     } else if (object.priceTr3Mo && object.priceTr3Mo.value) {
        //         yearShort = '3mo';
        //         yearLong = '3 month';
        //         yearPercent = this.convertToPercent(object.priceTr3Mo.value);
        //     } else if (object.priceTr1Mo && object.priceTr1Mo.value) {
        //         yearShort = '1mo';
        //         yearLong = '1 month';
        //         yearPercent = this.convertToPercent(object.priceTr1Mo.value);
        //     } else {
        //         yearShort = 'No History';
        //         yearLong = 'No History';
        //         yearPercent = '--';
        //     }
        //     object.yearShort = yearShort;
        //     object.yearLong = yearLong;
        //     object.yearPercent = yearPercent;
        // },
        //
        // updatePerformance: function(objects) {
        //     var that = this;
        //     _.each(objects, function(object) {
        //         that.getReturnYear(objects);
        //     });
        // },
        //
        // updateAnalysis: function(responseAnalysis) {
        //     var analysis = responseAnalysis;
        //
        //     analysis.risk = this.convertToPercent(analysis.spread.value);
        //     return analysis;
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
                // performance: this.updatePerformance(response.performance),
                // analysis: this.updateAnalysis(response.analysis),
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
