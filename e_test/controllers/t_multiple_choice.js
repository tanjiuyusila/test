var t_multiple_choice_model = require('../models/t_multiple_model');

exports.m_read = function(req,res,next){
    var id = req.params.id;
    
    t_multiple_choice_model.m_m_read(id,function(err,data){
        res.json(data);
    })
}