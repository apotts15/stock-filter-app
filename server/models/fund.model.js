// Example model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FundSchema = new Schema({
});

FundSchema.methods = {
};
FundSchema.statics = {
    get: function (area_id, cb) {
        this.findOne({ _id : area_id })
            .exec(cb);
    }
};

module.exports = mongoose.model('Fund', FundSchema);
