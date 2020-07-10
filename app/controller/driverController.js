'use strict';

var Driver = require('../model/driverModel.js');

exports.listAllDriver = function (req, res) {
    Driver.getAllDriver(function (err, driver) {  

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', driver);
        res.send(driver);
    });
};



exports.create_Driver = function (req, res) {
    var new_driver = new Driver(req.body);

    //handles null error 
    if (!new_driver.driver_name || !new_driver.driver_contact_no || !new_driver.driver_cnic || !new_driver.driver_address) {

        res.status(400).send({ error: true, message: 'Null values' });
        console.log("Null Values, Driver");

    }
    else {

        Driver.createDriver(new_driver, function (err, driver) {

            if (err)
                res.send(err);
            res.json(driver);
        });
    }
};


exports.read_a_driver = function (req, res) {
    Driver.getcomplainById(req.params.driver_id, function (err, driver) {
        if (err)
            res.send(err);
        res.json(driver);
    });
};


exports.update_driver = function (req, res) {
    Driver.updateById(req.params.driver_id, new Driver(req.body), function (err, driver) {
        if (err)
            res.send(err);
        res.json(driver);
    });
};


exports.delete_driver = function (req, res) {


    Driver.remove(req.params.driver_id, function (err, driver) {
        if (err)
            res.send(err);
        res.json({ message: 'Driver successfully deleted' });
    });
};