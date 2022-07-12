var express = require('express');
var equationController = require('../controllers/equationController');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

const router = express.Router();
//Página Inicial
router.get('/', jsonParser, function (req, res) {
    equationController.getMain(req,res);
});

router.get('/create', jsonParser, function (req, res) {
    res.render('Create');
});

router.post('/create', jsonParser, function (req, res) {
    equationController.insert(req,res);
});
router.get('/password', jsonParser, function (req, res) {
    res.render('Password', {certo:false});
});
router.route("/password").post(verifyResults)
async function verifyResults(req,res) {
    let result_1 = await req.body.result_1;
    let a = await req.body.a;
    let b = await req.body.b;
    let c = await req.body.c;
    const delta = b*b - 4*a*c;
    if (result_1 == ""){
        equationController.getMainNada(req,res)
    }
    else{
        if (delta == result_1){
            equationController.getById(req,res);
        }
        else{
            equationController.getMainErrado(req,res)
        }
    }
}
//Let's expose these routes
module.exports = router;