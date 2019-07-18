var t_program_model = require('../models/t_program_model.js');

exports.p_read = function(req,res,next){
    var id = req.params.id;

    t_program_model.p_m_read(id,function(err,data){
        res.json(data);
    })
};