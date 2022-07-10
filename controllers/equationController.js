const EquationModel = require('../models/equation');

exports.insert = (req, res) => {
    EquationModel.createEquation(req.body, (doc, err) => {
        if(!err) res.status(200);
        else {res.status(500).send({message: err.message});
            alert("Valores introduzidos não são válidos!");
        }
    });
};

exports.patchById = (req, res) => {
    EquationModel.patchEquation(req.params.id, req.body, (doc, err) => {
        if(!err) {res.redirect("/updateResult");
            alert("Sucesso!");}
        else res.status(500).send({message: err.message});
    });
};

exports.list = (req, res) => {
    EquationModel.list((doc,err) => {
        if(!err) res.status(201).render('main', {equations:doc});
        else res.status(500).send({message: err.message});
    });
};