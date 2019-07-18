var db = require("./db.js");



exports.p_m_write = function(up,token,p,html,css,java,date,callback){
    var sql = "insert into t_user_program(up_id,token_id,p_id,html,css,javascript,commit_date) values(?,?,?,?,?,?,?) ";
    db.query(sql,[up,token,p,html,css,java,date],callback);
}