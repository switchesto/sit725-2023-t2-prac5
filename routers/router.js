let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    controller.postSpiderman(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllSpideys(req,res);
});

router.delete('/', (req,res)=>{
    controller.getAllSpideys(req,res);
});


module.exports = router;