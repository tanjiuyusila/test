var express = require('express');
var router = express.Router();

var t_User = require('../controllers/t_user.js');
var t_User_single_choice = require('../controllers/t_user_single_choice.js');
var t_User_multiple_choice = require('../controllers/t_user_multiple_choice.js');
var t_User_program = require('../controllers/t_user_program');
var t_program = require('../controllers/t_program');
var t_multiple_choice = require('../controllers/t_multiple_choice');
var t_single_choice = require('../controllers/t_single_choice');


router.get('/', t_User.index);
router.post('/',t_User.sel);


//前端读取数据 
router.get('/single_r/:id',t_single_choice.s_read);
router.get('/multiple_r/:id',t_multiple_choice.m_read);
router.get('/program_r/:id',t_program.p_read);

// 前端写入总端口 
router.post('/all_write',t_User_single_choice.all_write);

// 前端写入分端口
router.post('/all_s_write',t_User_single_choice.all_s_write);
router.post('/all_m_write',t_User_multiple_choice.all_m_write);
router.post('/all_p_write',t_User_program.all_p_write);


// router.post('/single_w/',t_User_single_choice.s_write);
// router.post('/multiple_w',t_User_multiple_choice.m_write);
// router.post('/program_w',t_User_program.p_write);


module.exports = router;
