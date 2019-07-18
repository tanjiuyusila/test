var t_User_single_choice_model = require('../models/t_User_single_choice_model.js');
// 单选读取方法
exports.s_read = function(req,res,next){
    var id = req.params.id;
    console.log(id);
    t_User_single_choice_model.s_m_read(id,function(err,data){
        res.json(data);
        // console.log(data);
    })
};
// 单选写入方法
exports.s_write = function(req,res,next){
   var usc = req.body.usc_id;
   var tocken = req.body.token_id;
   var sc = req.body.sc_id;
   var answer = req.body.user_answer;
   var date = req.body.commit_date;
   
    t_User_single_choice_model.s_m_write(usc,tocken,sc,answer,date,function(err,data){
        console.log(data);
    })
}
