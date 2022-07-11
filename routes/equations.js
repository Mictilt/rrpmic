var express = require('express');
var equationController = require('../controllers/equationController');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

const router = express.Router();
//Página Inicial
router.get('/', jsonParser, function (req, res) {
    equationController.getById(req,res);
});

router.post('/', jsonParser, function (req, res) {
});

router.get('/create', jsonParser, function (req, res) {
    res.render('create');
});

router.post('/create', jsonParser, function (req, res) {
        equationController.insert(req,res);

});
//Let's expose these routes
module.exports = router;