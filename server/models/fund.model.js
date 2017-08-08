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
    companies: [],
    categoryData: Schema.Types.Mixed
});



FundSchema.methods = {
};
FundSchema.statics = {
    get: function (ticker, cb) {
        var query = { 'ticker': ticker};

        this.findOne(query, function(err, item) {
            console.log(err);
        }).exec(cb);

    },
    getAll: function (cb) {
        this.find()
            .sort({'name': -1}) // sort by date
            .exec(cb);
    },
    getBySymbol: function (ticker, cb) {
        //console.log('model Funds getBySymbol');
        this.findOne({ ticker: ticker})
            .exec(cb);
    },
    getByCompany: function (ticker, cb) {
        this.find({"companies": { $in: [ticker] }})
            .exec(cb);
    },
    //db.funds.find( { 'fundBasics.aum.value': { $gt: 28890, $lt: 28890000 } } ).count();
    filter: function (filter, cb) {
        this.find(filter)
            .exec(cb);
    },
    //({ $and: [{"companies": { $in: ['MSFT'] }},{ 'fundBasics.aum.value': { '$lt': 9998604840, '$gt': 1156 } }] });
    getByCompanyFilter: function (filter, cb) {
        //var dbFilter = { $and: [{"companies": { $in: [ticker] }}, filter]};
        var dbFilter = { $and: filter};
        console.log(dbFilter);
        this.find(dbFilter)
            .exec(cb);
    }
};

module.exports = mongoose.model('Fund', FundSchema);
