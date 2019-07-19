var db = require("./db.js");


exports.m_m_write = function(token,mc,answer_m,date_m,callback){
    var sql = "insert into t_user_multiple_choice(token_id,mc_id,user_answer,commit_date) values(?,?,?,?) ";
    db.query(sql,[token,mc,answer_m,date_m],callback);
}