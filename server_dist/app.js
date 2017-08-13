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
//
// var redis = require("redis"),
//     redisCli = redis.createClient(config.redis.port, config.redis.host, config.redis.options),
//     redisCliSess = redis.createClient(config.redis.port, config.redis.host, config.redis.options),
//     redisStore = require('connect-redis')(session);

mongoose.Promise = global.Promise;

var connectMongo = function () {
    console.log('config.db.mongo.uri',config.db.mongo.uri);
    mongoose.connect(config.db.mongo.uri, config.db.mongo.options);
};

connectMongo();

var createNewEntries = function(db, entries, callback) {

    // Get the collection and bulk api artefacts
    var collection = db.collection('funds'),
        bulk = collection.initializeOrderedBulkOp(), // Initialize the Ordered Batch
        counter = 0;

    // Execute the forEach method, triggers for each entry in the array
    entries.forEach(function(obj) {

        bulk.insert(obj);
        counter++;

        if (counter % 1000 == 0 ) {
            // Execute the operation
            bulk.execute(function(err, result) {
                // re-initialise batch operation
                bulk = collection.initializeOrderedBulkOp();
                callback();
            });
        }
    });

    if (counter % 1000 != 0 ){
        bulk.execute(function(err, result) {
            // do something with result
            callback();
        });
    }
};

//Get the default connection
var db = mongoose.connection;
var entries = [];
// fs.readFile("./FINAL-etfData-with-companies.json", "utf8", function(error,data) {
// // fs.readFile("../data/search-data/search-data-companies-5.json", "utf8", function(error,data) {
//     if (error) throw error;
//
//     entries = JSON.parse(data);
//     console.log('entries', entries)
// });

db.on('error', console.error.bind(console, 'connection error:'));
db.on('disconnected', connectMongo);
db.once('open', function() {
    console.log('connected to mongo db');
    // createNewEntries(db, entries, function() {
    //     console.log('Adding new Entries');
    //     db.close();
    // });
});


// Populate DB with sample data
//if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = module.exports = express();
// app.use(session({
//     store: new redisStore({client:redisCliSess,ttl:18000,db:15}),
//     secret: 'ukyo.pu',
//     name: 'seed.sid',
//     cookie: {maxAge: 3600000, secure: false},
//     resave: false,
//     saveUninitialized: true
// }));
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
    console.log('Server PATH: ', path.join(config.root, config.appPath));
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
