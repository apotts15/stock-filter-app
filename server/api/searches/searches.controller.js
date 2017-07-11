var _ = require('underscore');
var mongoose = require('mongoose');
var Search = mongoose.model('Search');


// exports.getById = function(req, res){
//     Doctor.get(req.params.id, function (err, doc) {
//         if (err) {
//             console.error( err );
//             res.json({success:false,msg:err});
//         }else{
//             res.json({success:true,msg:doc});
//         }
//     });
// };
exports.getById = function(req, res){
    //res.json({success:true,msg:"get by id"});
    //console.log('req', req);
    var query = {$or: [{"name": /Van/i}, {"symbol": /VO/i}]};
    query = {"symbol": "VO"};
    Search.doFind(query, function(err, results) {
        if(!err){
            console.log('results', results);
            res.send(results);
        } else {
            console.log('error', err);
            throw err;
        }
    });

    //+ req.query.key +
    // Search.find(query, function(err, results) {
    //     if (err) throw err;
    //
    //     console.log('results',results);
    //     // var data=[];
    //     // for(var i = 0;i < rows.length; i++) {
    //     //     data.push(rows[i].token);
    //     // }
    //     res.json(results);
    // });
};
//
// var CompanySchema = new mongoose.Schema({
//     CompanyName: String,
//     password:String,
//     email: {type: String, unique:true},
//     createdOn: { type: Date, default: Date.now }
//     //modifiedOn: Date,
//     //lastLogin: Date
// });
// mongoose.model( 'company', userSchema );
//
// var Company = mongoose.model('company');
//
// User.find({}, function(err, users) {
//     if(!err){
//         console.log(users);
//     }
// });
//
// company.find({}, function(err, users) {
//     if(!err){
//         console.log(users);
//     }
// });
//
//
// app.get('/details', function (req, res) {
//     console.log('I received a GET request');
//     company.find({}, function(err, users) {
//         if(!err){
//             res.send(users);
//         }
//         else{
//             res.send('could not retrived data');
//         }
//     });
//
// });

//
// exports.getById = function(req, res){
//     Doctor.get(req.params.id, function (err, doc) {
//         if (err) {
//             console.error( err );
//             res.json({success:false,msg:err});
//         }else{
//             res.json({success:true,msg:doc});
//         }
//     });
// };