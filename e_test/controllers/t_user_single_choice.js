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
    // console.log(req.body);

    var s_arr = req.body[0];
    var m_arr = req.body[1];
    var p_arr = req.body[2];

    var all_l = s_arr.length + m_arr.length + p_arr.length;
    var ret_L = 0;
    s_arr.forEach((val)=>{
        var token = val.token_id;
        var sc = val.sc_id;
        var s_a = val.user_answer;
            if(s_a == 0){
                s_a = 'a';
            }else if(s_a == 1){
                s_a = 'b';
            }else if(s_a == 2){
                s_a = 'c';
            }else{
                s_a = 'd';
            }
        var answer_s = s_a;
        // var date_s = val.commit_date;

        t_User_single_choice_model.singleFind(token,sc,function(err,data){
            
            // console.log(data);
            // console.log(data.length);
            if(data.length > 0 ){
                t_User_single_choice_model.singleUpdate(answer_s,token,sc,function(err,data){
                    // console.log(data);
                    ret_L++;
                })
            }else{
                t_User_single_choice_model.s_m_write(token,sc,answer_s,function(err,data){
                    // t_User_single_choice_model.s_m_write(token,sc,answer_s,date_s,function(err,data){
                    // console.log(data);
                    ret_L++;
                });
            }
        });
    });

    m_arr.forEach((val)=>{
        var token = val.token_id;
        var mc = val.mc_id;
        var date_m = val.commit_date;
        var a = val.user_answer;
        var b = [];
        a.forEach((l)=>{
            if(l == 0){
                b.push('a')
            }else if(l == 1){
                b.push('b')
            }else if(l == 2){
                b.push('c')
            }else{
                b.push('d')
            }
        });
        var answer_m = b.join("|")
        t_User_multiple_choice_model.multipleFind(token,mc,function(err,data){
            // console.log(data);
            // console.log(data.length);
            if(data.length > 0 ){
                t_User_multiple_choice_model.multipleUpdate(answer_m,token,mc,function(err,data){
                    // console.log(data);
                    ret_L++;
                })
            }else{
                t_User_multiple_choice_model.m_m_write(token,mc,answer_m,function(err,data){
                    // console.log(data);
                    ret_L++;
                })
            }
        });
    });

    p_arr.forEach((val)=>{
        var token = val.token_id;
        var p = val.p_id;
        var html = val.html;
        var css = val.css;
        var java = val.javascript;
        var date_p = val.commit_date;
        
        t_User_program_model.programFind(token,p,function(err,data){
            // console.log(data);
            // console.log(data.length);
            if(data.length > 0 ){
                ret_L++;

                t_User_program_model.programUpdateHtml(html,token,p,function(err,data){
                    // console.log(data);
                    // ret_L++;
                });
                t_User_program_model.programUpdateCss(css,token,p,function(err,data){
                    // console.log(data);
                    // ret_L++;
                });
                t_User_program_model.programUpdateJava(java,token,p,function(err,data){
                    // console.log(data);
                    // ret_L++;
                })
            }else{
                t_User_program_model.p_m_write(token,p,html,css,java,function(err,data){
                    ret_L++;
                })
            }
        });


        
    });
    if(this.all_l == this.ret_L){
        console.log('提交完成');
        res.json({code:200});
    }else{
        console.log('提交失败');
        res.json({code:404});
    }
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



