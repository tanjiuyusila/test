var t_program_model = require('../models/t_program_model.js');


exports.p_read = function(req,res,next){
    var exer = req.body.exer_id;
    t_program_model.p_m_read(exer,function(err,data){
        res.json(data);
    })
}