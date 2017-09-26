// Example model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FundSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        productId: Number,
        fund: String,
        ticker: String,
        inceptionDate: Date,
        launchDate: Date,
        hasSegmentReport: Boolean,
        genericReport: Boolean,
        hasReport: Boolean,
        fundsInSegment: Number,
        economicDevelopment: String,
        totalRows: Number,
        fundBasics: {
            issuer: String,
            expenseRatio: {
                value: Number
            },
            aum: {
                value: Number
            },
            spreadPct: {
                value: Number
            },
            segment: String
        },
        performance: {
            priceTrAsOf: Date,
            priceTr1Mo: {
                value: Number
            },
            priceTr3Mo: {
                value: Number
            },
            priceTr1Yr: {
                value: Number
            },
            priceTr3YrAnnualized: {
                value: Number
            },
            priceTr5YrAnnualized: {
                value: Number
            },
            priceTr10YrAnnualized: {
                value: Number
            }
        },
        analysis: {
            analystPick: Boolean,
            opportunitiesList: Boolean,
            letterGrade: String,
            efficiencyScore: Number,
            tradabilityScore: Number,
            fitScore: Number,
            leveragedFactor: Boolean,
            exposureReset: Boolean,
            avgDailyDollarVolume: Number,
            avgDailyShareVolume: Number,
            spread: {
                value: Number
            },
            fundClosureRisk: String
        },
        fundamentals: {
            dividendYield: {
                value: Number
            },
            equity: {
                pe: Number,
                pb: Number
            },
            fixedIncome: {
                duration: Number,
                creditQuality: String,
                ytm: {
                    value: Number
                }
            }
        },
        classification: {
            assetClass: String,
            strategy: String,
            region: String,
            geography: String,
            category: String,
            focus: String,
            niche: String,
            inverse: Boolean,
            leveraged: Boolean,
            etn: Boolean,
            selectionCriteria: String,
            weightingScheme: String,
            activePerSec: Boolean,
            underlyingIndex: String,
            indexProvider: String,
            brand: String
        },
        tax: {
            legalStructure: String,
            maxLtCapitalGainsRate: Number,
            maxStCapitalGainsRate: Number,
            taxReporting: String
        },
        msciEsg: {
            msciEsgQualityScore: Number,
            msciEsgQualityScorePctlPeer: Number,
            msciEsgQualityScorePctlGlobal: Number,
            msciWeightedAvgCarbonInten: Number,
            msciSustainableImpactPct: Number,
            msciSriExclusionCriteriaPct: Number,
            msciEsgHasBadge: Boolean
        },
        categoryData: Schema.Types.Mixed,
        companies: [],
        gunStocks: [],
        sinStocks: {
            guns: {
                investList: [],
                divestList: [],
                hasSinStocks: Boolean
            },
            alcohol: {
                investList: [],
                divestList: [],
                hasSinStocks: Boolean
            },
            gambling: {
                investList: [],
                divestList: [],
                hasSinStocks: Boolean
            },
            porn: {
                investList: [],
                divestList: [],
                hasSinStocks: Boolean
            },
            tobacco: {
                investList: [],
                divestList: [],
                hasSinStocks: Boolean
            },
            fossilFuel: {
                investList: [],
                divestList: [],
                hasSinStocks: Boolean
            }
        }
    });

FundSchema.methods = {
};
FundSchema.statics = {
    get: function (ticker, cb) {
        console.log('get query: ', ticker);
        var query = { 'ticker': ticker.toUpperCase()};

        this.findOne(query, function(err) {
            console.log(err);
        }).exec(cb);

    },
    getAll: function (cb) {
        console.log('getAll query');
        this.find({})
            .exec(cb);
    },
    getBySymbol: function (ticker, cb) {
        console.log('getBySymbol query:', ticker);
        //console.log('model Funds getBySymbol');
        this.findOne({ ticker: ticker})
            .exec(cb);
    },
    getByCompany: function (ticker, cb) {
        console.log('getByCompany query:', ticker );
        this.find({"companies": { $in: [ticker] }})
            .exec(cb);
    },
    //db.funds.find( { 'fundBasics.aum.value': { $gt: 28890, $lt: 28890000 } } ).count();
    //db.funds.find({ $and: [{ 'fundBasics.aum.value': { '$lt': 9998604840, '$gt': 1156 } }] }).count();
    filter: function (filter, cb) {
        // filter = [{ 'fundBasics.aum.value': { '$lt': 5348681975.91 } },   { 'fundamentals.dividendYield.value': { '$gt': 0.0000 } },   { 'fundamentals.dividendYield.value': { '$lt': 0.3106 } },   { 'fundBasics.expenseRatio.value': { '$gt': 0.00 } },   { 'fundBasics.expenseRatio.value': { '$lt': 109.49 } } ];

        console.log('filter query:', filter);
        this.find(filter)
            .exec(cb);
    },
    //({ $and: [{"companies": { $in: ['MSFT'] }},{ 'fundBasics.aum.value': { '$lt': 9998604840, '$gt': 1156 } }] });
    getByCompanyFilter: function (filter, cb) {
        //var dbFilter = { $and: [{"companies": { $in: [ticker] }}, filter]};
        var dbFilter = { $and: filter};
        console.log('getByCompanyFilter query:', dbFilter);
        this.find(dbFilter)
            .exec(cb);
    }
};

module.exports = mongoose.model('Fund', FundSchema);
