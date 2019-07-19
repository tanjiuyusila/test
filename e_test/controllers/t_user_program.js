var t_User_program_model = require('../models/t_user_program_model');

// exports.p_write = function(req,res,next){
//     var up = req.body.up_id;
//     var token = req.body.token_id;
//     var p = req.body.p_id;
//     var html = req.body.html;
//     var css = req.body.css;
//     var java = req.body.javascript;
//     var date = req.body.commit_date;
    
//     t_User_program_model.p_m_write(up,token,p,html,css,java,date,function(err,data){
//          console.log(data);
//      })
// };


exports.all_p_write = function(req,res,next){
    var token = req.body.token_id;
    var p = req.body.p_id;
    var html = req.body.html;
    var css = req.body.css;
    var java = req.body.javascript;
    var date_p = req.body.commit_p_date;


    t_User_program_model.p_m_write(token,p,html,css,java,date_p,function(err,data){
        console.log(data);
    })
}