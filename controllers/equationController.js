const EquationModel = require('../models/equation');

exports.insert = (req, res) => {
    EquationModel.createEquation(req.body, (doc, err) => {
        if(!err) res.status(201).redirect("/create");
        else {res.status(500).send({message: err.message});
            alert("Valores introduzidos não são válidos!");
        }
    });
};

exports.patchById = (req, res) => {
    EquationModel.patchEquation(req.params.id, req.body, (doc, err) => {
        if(!err) ;
        else res.status(500).send({message: err.message});
    });
};

exports.getMain = (req, res) => {
    const a =  Math.floor(Math.random()*99 - 50);
    const b =  Math.floor(Math.random()*99 - 50);
    const c =  Math.floor(Math.random()*99 - 50);
    res.render('Main', {a, b, c,nada:false,errado:false});
};

exports.getMainNada = (req, res) => {
    const a =  req.body.a;
    const b =  req.body.b;
    const c =  req.body.c;
    res.render('Main', {a, b, c,nada:true,errado:false});
};

exports.getMainErrado = (req, res) => {
    const a =  req.body.a;
    const b =  req.body.b;
    const c =  req.body.c;
    res.render('Main', {a, b, c,nada:false,errado:true});
};

exports.getById = (req, res) => {
    const id = "62cc798905f3601bf6791294";
    EquationModel.equationFindById(id, (doc, err) => {
        if(!err) res.status(201).render('Password', {router:doc,certo:true});
        else res.status(500).send({message: err.message});
    });
};