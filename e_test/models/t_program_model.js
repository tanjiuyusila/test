var db = require("./db.js");



exports.p_m_read = function(exer,callback){
    var sql = "select * from t_program where exer_id=?";
    db.query(sql,[exer],callback);
}