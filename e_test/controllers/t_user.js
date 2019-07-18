var t_User_model = require('../models/t_User_model.js');


exports.index = function(req, res, next) {
    res.render('index', { title: 'Express' });
}

exports.sel = function(req, res, next) {
    t_User_model.sel(function(err,data){
        console.log(data);
    })
}


