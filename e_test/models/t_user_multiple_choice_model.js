var db = require("./db.js");


exports.m_m_write = function(token,mc,answer_m,callback){
    var sql = "insert into t_user_multiple_choice(token_id,mc_id,user_answer) values(?,?,?) ";
    db.query(sql,[token,mc,answer_m],callback);
}

exports.multipleFind = function(token,mc,callback){
    var sql="select * from t_user_multiple_choice where token_id=? and mc_id=?";
    db.query(sql,[token,mc],callback);
}


exports.multipleUpdate = function(answer_m,token,mc,callback){
    var sql= "update t_user_multiple_choice set user_answer= ? where token_id=? and mc_id=?" ;
    db.query(sql,[answer_m,token,mc],callback);
}