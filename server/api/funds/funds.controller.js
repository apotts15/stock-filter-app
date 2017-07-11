
exports.index = function(req, res){
    res.json({success:true,msg:["get index"]});
};

exports.getById = function(req, res){
    res.json({success:true,msg:"get by id"});
};