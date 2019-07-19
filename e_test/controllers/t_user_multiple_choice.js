var t_User_multiple_choice_model = require('../models/t_User_multiple_choice_model.js');


exports.m_write = function(req,res,next){
    var umc = req.body.umc_id;
    var token = req.body.token_id;
    var mc = req.body.mc_id;
    var answer = req.body.user_answer;
    var date = req.body.commit_date;
    
     t_User_multiple_choice_model.m_m_write(umc,token,mc,answer,date,function(err,data){
         console.log(data);
     })
}