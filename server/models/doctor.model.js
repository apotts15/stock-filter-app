// Example model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DoctorSchema = new Schema({
    email: { type: String, trim : true},
    name:  { type: String, required: true , trim : true},
    image: { type: String }
});

DoctorSchema.methods = {
    updateSave: function (cb) {
        var self = this;
        this.validate(function (err) {
            if (err) return cb(err);
            self.save(cb);
        });
    }
};
DoctorSchema.statics = {
    get: function (doctorId, cb) {
        this.findOne({ _id : doctorId })
            .exec(cb);
    },
    getAll: function (cb) {
        this.find({})
            .sort({'name': -1}) // sort by date
            .exec(cb);
    }
};

module.exports = mongoose.model('Doctor', DoctorSchema);
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