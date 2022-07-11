const mongoose = require('./mongooseConfigs').mongoose;
const Schema = mongoose.Schema;
const fetch = require('node-fetch');
//Our user schema
const equationSchema = new mongoose.Schema({
    password:String,
    date: {
        type: Date,
        default: Date.now
    },
});

//Create the actual model
const Equation = mongoose.model('Equations', equationSchema);

exports.equationFindById = (id, cb) => {
    Equation.findById(id, { _id:1, password:1, date:1})
        .exec()
        .then(doc => cb(doc))
        .catch(err => cb(null, err));
};

exports.createEquation = (equationData, cb) => {

    const equ = new Equation(equationData);

    //Equivalently as the previous lines, mongoose allows the .then .catch mechanism instead of the callbacks (very similar to JS promises)
    equ.save()
        .then(doc => cb(doc))
        .catch(err => cb(null, err)); //In this case the callback signature should be changed to include the err parameter
};

exports.list = (cb) => {

    Equation.find({ }, { _id:1, password:1, date:1})
        .exec()
        .then((docs) => cb(docs))
        .catch(err => cb(err));
};

exports.patchEquation = (id, equationData, cb) => {

    //status code 204 should be returned if we don't want to send back the updated model
    Equation.findOneAndUpdate({_id: id}, equationData, {new:true, overwrite:true, projection: { _id:0, password:1,date:0}})
        .exec()
        .then(() => cb())
        .catch(err => cb(err));
};

exports.removeById = (equationId, cb) => {

    Equation.deleteMany({ _id: equationId })
        .exec()
        .then(() => cb())
        .catch(err => cb(err));

};


exports.equationModel = function () {
    return mongoose.model('Equations', equationSchema);
};