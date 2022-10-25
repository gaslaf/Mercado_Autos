var express = require('express');
var router = express.Router();

const {list,detail,add,edit,update,destroy} = require('../controllers/productsController')
/*GET home page */

router.get('/list',list);
router.get('/detail/:id',detail)

router.get('/add',add);
router.post('/add',add);
router.get('/edit/:id',edit);
router.put('/edit/:id',update);
router.delete('/delete/:id',destroy);

module.exports = router