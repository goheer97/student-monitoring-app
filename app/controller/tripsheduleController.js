'use strict';

var Trip_Shedule = require('../model/tripsheduleModule.js');

exports.listAllTripShedule = function (req, res) {
    Trip_Shedule.getAllTripShedule(function (err, tripshedule) {  

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', tripshedule);
        res.send(tripshedule);
    });
};



exports.create_TripShedule = function (req, res) {
    var new_tripshedule = new Trip_Shedule(req.body);

    //handles null error 
    if (!new_tripshedule.van_id || !new_tripshedule.destination_school_id || !new_tripshedule.driver_id || !new_tripshedule.trip_date || !new_tripshedule.trip_exp_start_time || !new_tripshedule.trip_exp_end_time) {

        res.status(400).send({ error: true, message: 'Null values' });

    }
    else {

        Trip_Shedule.createTrip_Shedule(new_tripshedule, function (err, tripshedule) {

            if (err)
                res.send(err);
            res.json(tripshedule);
        });
    }
};


exports.read_a_TripShedule = function (req, res) {
    Trip_Shedule.gettripdheduleById(req.params.trip_sec_id, function (err, tripshedule) {
        if (err)
            res.send(err);
        res.json(tripshedule);
    });
};


exports.update_TripShedule = function (req, res) {
    Trip_Shedule.updateById(req.params.trip_sec_id, new Trip_Shedule(req.body), function (err, tripshedule) {
        if (err)
            res.send(err);
        res.json(tripshedule);
    });
};


exports.delete_TripShedule = function (req, res) {


    Trip_Shedule.remove(req.params.trip_sec_id, function (err, tripshedule) {
        if (err)
            res.send(err);
        res.json({ message: 'Trip shedule successfully deleted' });
    });
};