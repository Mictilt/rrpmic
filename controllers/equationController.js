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

/*exports.list = (req, res) => {
    EquationModel.list((doc,err) => {
        const a =  Math.floor(Math.random()*99 - 50);
        const b =  Math.floor(Math.random()*99 - 50);
        const c =  Math.floor(Math.random()*99 - 50);
        if(!err) res.status(201).render('main', {equation:doc, a, b, c});
        else res.status(500).send({message: err.message});
    });
};*/
exports.getById = (req, res) => {
    const id = "62cc4fd3992d97983853d11b";
    EquationModel.equationFindById(id, (doc, err) => {
        const a =  Math.floor(Math.random()*99 - 50);
        const b =  Math.floor(Math.random()*99 - 50);
        const c =  Math.floor(Math.random()*99 - 50);
        if(!err) res.status(201).render('main', {equation:doc, a, b, c});
        else res.status(500).send({message: err.message});
    });
};