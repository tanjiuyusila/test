var t_User_multiple_choice_model = require('../models/t_User_multiple_choice_model.js');


// exports.m_write = function(req,res,next){
//     var umc = req.body.umc_id;
//     var token = req.body.token_id;
//     var mc = req.body.mc_id;
//     var answer = req.body.user_answer;
//     var date = req.body.commit_date;
    
//      t_User_multiple_choice_model.m_m_write(umc,token,mc,answer,date,function(err,data){
//          console.log(data);
//      })
// }

exports.all_m_write = function(req,res,next){
    console.log(req.body);

    req.body.forEach((val)=>{
        var token = val.token_id;
        var mc = val.mc_id;
        var date_m = val.commit_date;
        var a = val.user_answer;
        var answer_m = a.join("|")
        // console.log(a);
 
        t_User_multiple_choice_model.m_m_write(token,mc,answer_m,date_m,function(err,data){
        console.log(data);
        })
    });

    
    
    
}