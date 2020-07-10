'use strict';

var Van = require('../model/vanModel.js');

exports.listAllVan = function (req, res) {
    Van.getAllVan(function (err, van) {  

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', van);
        res.send(van);
    });
};



exports.createVan = function (req, res) {
    var new_van = new Van(req.body);

    //handles null error 
    if (!new_van.shipment_date || !new_van.van_reg_no || !new_van.van_model) {

        res.status(400).send({ error: true, message: 'Null values' });

    }
    else {

        Van.createVan(new_van, function (err, van) {

            if (err)
                res.send(err);
            res.json(van);
        });
    }
};


exports.read_a_Van = function (req, res) {
    Van.getVanById(req.params.van_id, function (err, van) {
        if (err)
            res.send(err);
        res.json(van);
    });
};


exports.update_Van = function (req, res) {
    Van.updateById(req.params.van_id, new Van(req.body), function (err, van) {
        if (err)
            res.send(err);
        res.json(van);
    });
};


exports.delete_a_Van = function (req, res) {


    Van.remove(req.params.van_id, function (err, van) {
        if (err)
            res.send(err);
        res.json({ message: 'Van successfully deleted' });
    });
};