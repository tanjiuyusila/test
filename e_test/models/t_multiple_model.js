var db = require("./db.js");


exports.m_m_read = function(id,callback){
    var sql = "select * from t_multiple_choice where exer_id=?";
    db.query(sql,[id],callback);
}