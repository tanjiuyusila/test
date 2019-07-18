var db = require("./db.js");


exports.sel = function(callback){
    var sql = "select * from t_user";
    db.query(sql,[],callback);
}