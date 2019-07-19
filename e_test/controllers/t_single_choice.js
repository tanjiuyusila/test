var t_single_choice_model = require('../models/t_single_choice_model');

exports.s_read = function(req,res,next){
    var id = req.params.id;
    console.log(id);
    t_single_choice_model.s_m_read(id,function(err,data){
        res.json(data);
        // console.log(data);
    })
};



