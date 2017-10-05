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
