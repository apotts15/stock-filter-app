var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FundAllocationSchema = new Schema({
    _id: Schema.Types.ObjectId,
    fund: String,
    companies: []
});

FundAllocationSchema.methods = {
    updateSave: function (cb) {
        var self = this;
        this.validate(function (err) {
            if (err) return cb(err);
            self.save(cb);
        });
    }
};

FundAllocationSchema.statics = {
    get: function (ticker, cb) {
        var query = { fund: ticker};
        console.log('FundAllocationSchema findOne', query);
        this.find({})
            .exec(cb);
    },
    getAll: function (cb) {
        console.log('FundAllocationSchema find all');
        this.find({})
        //.sort({'name': -1}) // sort by date
            .exec(cb);
    }
};

module.exports = mongoose.model('FundAllocation', FundAllocationSchema);