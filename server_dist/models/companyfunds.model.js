// Example model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanyFundsSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name:  { type: String, required: true, trim: true},
    ticker: { type: String, required: true, trim: true}
});

//
// var SearchSchema = new Schema({
//     _id: Schema.Types.ObjectId,
//     name:  { type: String, required: true, trim: true},
//     symbol: { type: String, required: true, trim: true},
//     series_name: { type: String, trim: true },
//     fund_type: { type: String, trim: true },
//     asset_class: { type: String, trim: true },
//     gunWeights: {
//         all: Number,
//         maker: Number,
//         seller: Number
//     },
//     gunHoldings: { type: String, trim: true },
//     analyzedWeights: { type: Number }
// });

//
//
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
//
// var blogSchema = new Schema({
//     title:  String,
//     author: String,
//     body:   String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//         votes: Number,
//         favs:  Number
//     }
// });


//{
// "name: "Strategic Allocation: Aggressive Fund R6 Class",
// "series_name": "American Century Strategic Allocation: Aggressive Fund",
//     "symbol": "AAAUX",
//     "fund_type": "Aggressive Allocation Portfolio",
//     "asset_class": "stocks",
//     "startDate": "1996-02-15T00:00:00.000Z",
//     "gunWeights": {
//          "all": 0.0022,
//         "maker": 0.0001,
//         "seller": 0.0021
// },
// "gunHoldings": [{
//     "name": "Dick's",
//     "symbol": "DKS",
//     "weight": 0.0002,
//     "date": "2015-11-29T15:00:00.000Z",
//     "marketValue": 231760,
//     "kind": "seller",
//     "approximated": false,
//     "owner": []
// }, {
//     "name": "Smith & Wesson",
//     "symbol": "SWHC",
//     "weight": 0.0001,
//     "date": "2015-11-29T15:00:00.000Z",
//     "marketValue": 67088,
//     "kind": "maker",
//     "approximated": false,
//     "owner": []
// }, {
//     "name": "Wal-Mart",
//     "symbol": "WMT",
//     "weight": 0.0019,
//     "date": "2015-11-29T15:00:00.000Z",
//     "marketValue": 1984850,
//     "kind": "seller",
//     "approximated": false,
//     "owner": []
// }],
//     "analyzedWeights": 0.6559003700665148
// }

CompanyFundsSchema.methods = {
};
CompanyFundsSchema.statics = {
    get: function (id, cb) {
        //console.log('Company Funds model get some');
        var query = { 'company': id };

        var items = this.find(query, function(err, item) {
            return items;
        });

        this.find({'ticker': { $in: [items]}}).exec(cb);

        //
        // console.log('model Fund get, id: ', id.toString());
        //
        // //this.findOne({ _id : "59683ebd8467c034d22b3995" })
        // this.findOne()
        //     .exec(cb);
    },
    getAll: function (cb) {
        //console.log('Company Funds model getAll');
        this.find()
            .sort({'name': -1}) // sort by date
            .exec(cb);
    },
    doFind: function(query, cb) {
        //console.log('model find');
        this.find(query).exec(cb);
    }
};

module.exports = mongoose.model('CompanyFunds', CompanyFundsSchema);
