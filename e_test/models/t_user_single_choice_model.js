var db = require("./db.js");

exports.s_m_write = function(token,sc,answer_s,date_s,callback){


    console.log(2222222222);
    var sql = "insert into t_user_single_choice(token_id,sc_id,user_answer,commit_date) values(?,?,?,?) ";
    db.query(sql,[token,sc,answer_s,date_s],callback);
}