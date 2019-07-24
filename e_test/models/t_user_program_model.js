var db = require("./db.js");



exports.p_m_write = function(token,p,html,css,java,callback){
    var sql = "insert into t_user_program(token_id,p_id,html,css,javascript) values(?,?,?,?,?) ";
    db.query(sql,[token,p,html,css,java],callback);
}

exports.programFind = function(token,p,callback){
    var sql = "select * from t_user_program where token_id=? and p_id=?";
    db.query(sql,[token,p],callback);
}

exports.programUpdateHtml = function(html,token,p,callback){
    var sql = "update t_user_program set html=? where token_id=? and p_id=?";
    db.query(sql,[html,token,p],callback);
}

exports.programUpdateCss = function(css,token,p,callback){
    var sql = "update t_user_program set css=? where token_id=? and p_id=?";
    db.query(sql,[css,token,p],callback);
}

exports.programUpdateJava = function(java,token,p,callback){
    var sql = "update t_user_program set javascript=? where token_id=? and p_id=?";
    db.query(sql,[java,token,p],callback);
}


