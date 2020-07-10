'use strict';

var School_Destination = require('../model/schooldestinationModel.js');

exports.listAllSchoolDest = function (req, res) {
    Driver.getAllSchoolDest(function (err, schooldest) {  

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', schooldest);
        res.send(schooldest);
    });
};



exports.create_SchoolDest = function (req, res) {
    var new_schooldest = new School_Destination(req.body);

    //handles null error 
    if (!new_schooldest.school_name || !new_schooldest.school_address || !new_schooldest.school_loc_lat || !new_schooldest.school_loc_lon) {

        res.status(400).send({ error: true, message: 'Null values' });

    }
    else {

        School_Destination.createPickupStop(new_schooldest, function (err, schooldest) {

            if (err)
                res.send(err);
            res.json(schooldest);
        });
    }
};


exports.read_a_SchoolDest = function (req, res) {
    School_Destination.getSchoolDestById(req.params.school_id, function (err, schooldest) {
        if (err)
            res.send(err);
        res.json(schooldest);
    });
};


exports.update_SchoolDest = function (req, res) {
    School_Destination.updateById(req.params.school_id, new School_Destination(req.body), function (err, schooldest) {
        if (err)
            res.send(err);
        res.json(schooldest);
    });
};


exports.delete_SchoolDest = function (req, res) {


    School_Destination.remove(req.params.school_id, function (err, schooldest) {
        if (err)
            res.send(err);
        res.json({ message: 'School Destination successfully deleted' });
    });
};