var db = require("./db.js");

exports.m_m_read = function(callback){
    var sql = "select * from t_user_multiple_choice";
    db.query(sql,[],callback);
}

exports.m_m_write = function(umc,token,mc,answer,date,callback){
    var sql = "insert into t_user_multiple_choice(umc_id,token_id,mc_id,user_answer,commit_date) values(?,?,?,?,?) ";
    db.query(sql,[umc,token,mc,answer,date],callback);
}