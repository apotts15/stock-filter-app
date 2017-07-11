/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var path = require('path');
var express = require('express');
var session = require('express-session');
var mongoose = require('mongoose');
var async = require('async');
var config = require('./config/environment');
var fs = require('fs');
var join = require('path').join;

var redis = require("redis"),
    redisCli = redis.createClient(config.redis.port, config.redis.host, config.redis.options),
    redisCliSess = redis.createClient(config.redis.port, config.redis.host, config.redis.options),
    redisStore = require('connect-redis')(session);

mongoose.Promise = global.Promise;

var connectMongo = function () {
    console.log('config.db.mongo.uri',config.db.mongo.uri);
    mongoose.connect(config.db.mongo.uri, config.db.mongo.options);
};

connectMongo();

//Get the default connection
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('disconnected', connectMongo);
db.once('open', function() {
    console.log('connected to mongo db');
    // var mongoose = require('mongoose');
    // var Schema = mongoose.Schema;
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
    // SearchSchema.statics = {
    //     get: function (area_id, cb) {
    //         this.findOne({ _id : area_id })
    //             .exec(cb);
    //     },
    //     getAll: function (cb) {
    //         this.find().exec(cb);
    //         //.sort({'name': -1}) // sort by date
    //
    //     }
    // };
    //
    // SearchSchema.methods.save = function() {
    //     var data = this.data;
    //     return data;
    // };
    //
    //
    // var d = {
    //     _id: "59683e8f8467c034d22b3993",
    //     "allocation": {
    //         "asset_class": [{
    //             "kind": "stocks",
    //             "weight": 0.9936,
    //             "label": "Stocks"
    //         }, {
    //             "kind": "bonds",
    //             "weight": 0,
    //             "label": "Bonds"
    //         }, {
    //             "kind": "cash",
    //             "weight": 0.0016,
    //             "label": "Cash"
    //         }, {
    //             "kind": "other",
    //             "weight": 0.0048,
    //             "label": "Other"
    //         }],
    //         "regional": [{
    //             "kind": "americas",
    //             "weight": 0.9753999999999998,
    //             "label": "Americas"
    //         }, {
    //             "kind": "europe",
    //             "weight": 0.019399999999999994,
    //             "label": "Europe"
    //         }, {
    //             "kind": "asia",
    //             "weight": 0.005199999999999999,
    //             "label": "Asia"
    //         }]
    //     },
    //     "asset_class": "stocks",
    //     "fund_type": "U.S. Mid-Cap Blend",
    //     "highlights": {
    //         "real_15yr": 2.53905396566619,
    //         "gains_3yr": 0.343977730844838,
    //         "real_5yr": 0.778218384728507,
    //         "gains_ytd": 0.0777794788872113,
    //         "gains_15yr": 2.53884153319233,
    //         "expense_net": 0.0009,
    //         "yield_1yr": 0.0157195363302234,
    //         "stddev_5yr": 0.13947522568495,
    //         "gains_1yr": 0.0326484903477766,
    //         "gains_6mo": 0.197330263153361,
    //         "real_3yr": 0.344381166249552,
    //         "real_ytd": 0.0782646980013117,
    //         "stddev_3yr": 0.120233420564884,
    //         "stddev_15yr": 0.17021842382653,
    //         "real_10yr": 1.26982510781395,
    //         "stddev_10yr": 0.178937293147266,
    //         "gains_10yr": 1.26962074077193,
    //         "gains_5yr": 0.777898190128442,
    //         "real_1yr": 0.0335787111878456,
    //         "gains_1mo": 0.0811141720232629,
    //         "stddev_1yr": 0.150747582151753
    //     },
    //     "name": "Vanguard Mid-Cap Index ETF",
    //     "net_assets": 44030000000,
    //     "security_classes": [{
    //         "class_name": "Institutional Class",
    //         "symbol": "VMCIX"
    //     }, {
    //         "class_name": "Admiral Class",
    //         "symbol": "VIMAX"
    //     }, {
    //         "class_name": "Investor Class",
    //         "symbol": "VIMSX"
    //     }, {
    //         "class_name": "Institutional Plus Class",
    //         "symbol": "VMCPX"
    //     }, {
    //         "class_name": "ETF",
    //         "symbol": "VO"
    //     }, {
    //         "class_name": "Signal Class",
    //         "symbol": "VMISX"
    //     }],
    //     "series_name": "Vanguard Mid-Cap Index Fund",
    //     "symbol": "VO",
    //     "canonicalSymbol": "VIMSX",
    //     "startDate": "1999-01-04T00:00:00.000Z",
    //     "fundFamily": "Vanguard",
    //     "inceptionDate": "2004-01-26T00:00:00.000Z",
    //     "gun": {
    //         "metrics": {
    //             "region": "US Stocks",
    //             "weight": 0.9753999999999998
    //         },
    //         "gunWeights": {
    //             "all": 0,
    //             "maker": 0,
    //             "seller": 0
    //         },
    //         "analyzedWeights": 0.9898,
    //         "gunHoldings": [],
    //         "top5Holdings": [{
    //             "name": "ROSS STORES INC",
    //             "symbol": "ROST",
    //             "weight": 0.0070999999999999995,
    //             "date": "2015-12-31T00:00:00.000Z",
    //             "marketValue": 469346000,
    //             "owner": []
    //         }, {
    //             "name": "FISERV INC",
    //             "symbol": "FISV",
    //             "weight": 0.0068000000000000005,
    //             "date": "2015-12-31T00:00:00.000Z",
    //             "marketValue": 446773000,
    //             "owner": []
    //         }, {
    //             "name": "ELECTRONIC ARTS INC",
    //             "symbol": "EA",
    //             "weight": 0.0066,
    //             "date": "2015-12-31T00:00:00.000Z",
    //             "marketValue": 433704000,
    //             "owner": []
    //         }, {
    //             "name": "ROPER INDUSTRIES INC",
    //             "symbol": "ROP",
    //             "weight": 0.0062,
    //             "date": "2015-12-31T00:00:00.000Z",
    //             "marketValue": 408939000,
    //             "owner": []
    //         }, {
    //             "name": "EQUINIX INC",
    //             "symbol": "EQIX",
    //             "weight": 0.0060999999999999995,
    //             "date": "2015-12-31T00:00:00.000Z",
    //             "marketValue": 398017000,
    //             "owner": []
    //         }]
    //     }
    // };
    //
    // var Search = mongoose.model('Search');
    // var search = new Search(d);
    // search.save(function (err, search) {
    //     if (err) return console.error(err);
    //     search.save();
    // });

    // var query = {$or: [{"name": /Van/i}, {"symbol": /VO/i}]};
    // query = {symbol: "VO"};
    // Search.find(query,function(err, results) {
    //     if(!err){
    //         console.log('results', results);
    //         //res.send(results);
    //     } else {
    //         console.log('error', err);
    //         throw err;
    //     }
    // });
});

// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = module.exports = express();
app.use(session({
    store: new redisStore({client:redisCliSess,ttl:18000,db:15}),
    secret: 'ukyo.pu',
    name: 'seed.sid',
    cookie: {maxAge: 3600000, secure: false},
    resave: false,
    saveUninitialized: true
}));
require('./config/express')(app);
fs.readdirSync(join(__dirname, 'models')).forEach(function (file) {
    if (~file.indexOf('.js')) require(join(__dirname, 'models', file));
});
fs.readdirSync(join(__dirname, 'routes')).forEach(function (file) {
    if (~file.indexOf('.js')) require(join(__dirname, 'routes', file))(app);
});
app.use(function (req, res) {
    var stream404 = fs.createReadStream(path.join(config.root, config.appPath,"404.html"));
    stream404.pipe(res);
});

var server = require('http').createServer(app);
server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
