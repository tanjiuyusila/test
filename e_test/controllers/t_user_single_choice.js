var t_User_single_choice_model = require('../models/t_user_single_choice_model.js');
var t_User_multiple_choice_model = require('../models/t_User_multiple_choice_model.js');
var t_User_program_model = require('../models/t_user_program_model');



// 单选写入方法
// exports.s_write = function(req,res,next){
//    var usc = req.body.usc_id;
//    var tocken = req.body.token_id;
//    var sc = req.body.sc_id;
//    var answer = req.body.user_answer;
//    var date = req.body.commit_date;
   
//     t_User_single_choice_model.s_m_write(usc,tocken,sc,answer,date,function(err,data){
//         console.log(data);
//     });    
// }

exports.all_write = function(req,res,next){
    // 单选
   var tocken = req.body.token_id;
   var sc = req.body.sc_id;
   var answer_s = req.body.user_s_answer;
   var date_s = req.body.commit_s_date;
    // 多选
    var mc = req.body.mc_id;
    var answer_m = req.body.user_m_answer;
    var date_m = req.body.commit_m_date;

    // 编程
 
    var p = req.body.p_id;
    var html = req.body.html;
    var css = req.body.css;
    var java = req.body.javascript;
    var date_p = req.body.commit_p_date;

    t_User_single_choice_model.s_m_write(tocken,sc,answer_s,date_s,function(err,data){
        console.log(data);
    });

    t_User_multiple_choice_model.m_m_write(tocken,mc,answer_m,date_m,function(err,data){
        console.log(data);
    })

    t_User_program_model.p_m_write(tocken,p,html,css,java,date_p,function(err,data){
        console.log(data);
    })

    
}


exports.all_s_write = function(req,res,next){
    // 单选
   
    console.log(req.body+'body');

    req.body.forEach((val,index,bod)=>{
        
        var token = val.token_id;
        var sc = val.sc_id;
        var answer_s = val.user_answer;
        var date_s = val.commit_date;

        t_User_single_choice_model.s_m_write(token,sc,answer_s,date_s,function(err,data){
            console.log(data);
        });
    });
}

