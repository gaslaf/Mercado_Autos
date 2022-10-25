var express = require('express');
var router = express.Router();

const {home,search} = require('../controllers/indexController');
const {index} = require('../controllers/AdminController')


/* GET home page. */
router.get('/',home)
router.get('/search',search)
router.get('/admin',index)
module.exports = router;
