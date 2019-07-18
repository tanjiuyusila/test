var express = require('express');
var router = express.Router();

var t_User = require('../controllers/t_user.js');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', t_User.index);
router.post('/',t_User.sel);

module.exports = router;
