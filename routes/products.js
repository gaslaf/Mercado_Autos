var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path')
const {list,detail,add,edit,store,update,destroy} = require('../controllers/productsController')
/*GET home page */

const storage = multer.diskStorage({
    destination : (req,file,cb) => cb(null, './public/images/autos'),
    filename : (req,file,cb) => cb(null, file.fieldname + '-' +Date.now() + path.extname(file.originalname))
});
const upload = multer({
    storage
})
router.get('/list',list);
router.get('/detail/:id',detail)
router.get('/add',add);
router.post('/add',upload.single('imagen'),store)
router.get('/edit/:id',edit);
router.put('/edit/:id',upload.single('imagen'),update);
router.delete('/delete/:id',destroy);

module.exports = router