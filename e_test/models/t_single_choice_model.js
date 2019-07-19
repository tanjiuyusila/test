var db = require("./db.js");

exports.s_m_read = function(id,callback){
    var sql = "select * from t_single_choice where exer_id = ?";
    db.query(sql,[id],callback);
}