var express = require('express');
var router = express.Router();

var t_User = require('../controllers/t_user.js');
var t_User_single_choice = require('../controllers/t_user_single_choice.js');
var t_User_multiple_choice = require('../controllers/t_user_multiple_choice.js');
var t_User_program = require('../controllers/t_user_program');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', t_User.index);
// router.post('/',t_User.sel);

router.post('/single_r',t_User_single_choice.s_read);
router.post('/single_w',t_User_single_choice.s_write);

router.post('/multiple_r',t_User_multiple_choice.m_read);
router.post('/multiple_w',t_User_multiple_choice.m_write);

router.post('/program_r',t_User_program.p_read);
router.post('/program_w',t_User_program.p_write);


module.exports = router;
