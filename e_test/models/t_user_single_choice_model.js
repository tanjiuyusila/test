var db = require("./db.js");

exports.s_m_write = function(token,sc,answer_s,callback){


    var sql = "insert into t_user_single_choice(token_id,sc_id,user_answer) values(?,?,?) ";
    db.query(sql,[token,sc,answer_s],callback);
}


exports.singleFind = function(token,sc,callback){
    var sql="select * from t_user_single_choice where token_id=? and sc_id=?";
    db.query(sql,[token,sc],callback);
}


exports.singleUpdate = function(answer_s,token,sc,callback){
    var sql= "update t_user_single_choice set user_answer= ? where token_id=? and sc_id=?" ;
    db.query(sql,[answer_s,token,sc],callback);
}