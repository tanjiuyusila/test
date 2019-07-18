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
// router.post('/',t_User.sel);

router.get('/single_r/:id',t_single_choice.s_read);
router.post('/single_w',t_User_single_choice.s_write);

router.get('/multiple_r/:id',t_multiple_choice.m_read);
router.post('/multiple_w',t_User_multiple_choice.m_write);

router.get('/program_r/:id',t_program.p_read);
router.post('/program_w',t_User_program.p_write);


module.exports = router;
