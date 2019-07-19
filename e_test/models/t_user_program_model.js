var db = require("./db.js");



exports.p_m_write = function(token,p,html,css,java,date_p,callback){
    var sql = "insert into t_user_program(token_id,p_id,html,css,javascript,commit_date) values(?,?,?,?,?,?) ";
    db.query(sql,[token,p,html,css,java,date_p],callback);
}