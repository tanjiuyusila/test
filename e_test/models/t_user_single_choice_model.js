var db = require("./db.js");


exports.s_m_read = function(id,callback){
    var sql = "select * from t_single_choice where exer_id = ?";
    db.query(sql,[id],callback);
}

exports.s_m_write = function(usc,tocken,sc,answer,date,callback){
    var sql = "insert into t_user_single_choice(usc_id,token_id,sc_id,user_answer,commit_date) values(?,?,?,?,?) ";
    db.query(sql,[usc,tocken,sc,answer,date],callback);
}