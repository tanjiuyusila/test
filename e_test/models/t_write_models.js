var db = require("./db.js");

// 用于判断用户是否写了单选类的题目
exports.getUserInforBySingle=function(token, sc_id,s_answer, callback){
    var sql="select * from t_user_single_choice where token_id=? and sc_id=? and user_answer=?";
    db.query(sql,[token,sc_id,s_answer],callback);
};

// 若已经写过，则直接更新题目的答案
exports.updateSingleChoice=function(token,sc_id,s_answer,callback){
    var sql= "update t_user_single_choice set user_answer= ? where token_id=? and sc_id=?" ;
    db.query(sql,[s_answer,token,sc_id],callback);
}

// 单选类题目
exports.writeSingleChoice = function(token,sc_id,s_answer,callback){
    var sql = "insert into t_user_single_choice(token_id,sc_id,user_answer) values(?,?,?) ";
    db.query(sql,[token,sc_id,s_answer],callback);
}