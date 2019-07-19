var db = require("./db.js");

exports.s_m_write = function(tocken,sc,answer,date_s,callback){
    var sql = "insert into t_user_single_choice(token_id,sc_id,user_answer,commit_date) values(?,?,?,?) ";
    db.query(sql,[tocken,sc,answer,date_s],callback);
}