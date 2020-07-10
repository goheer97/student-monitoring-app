'use strict';

var Trip = require('../model/tripModel.js');

exports.listAllTrip = function (req, res) {
    Trip.getAllTrip(function (err, trip) {  

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', trip);
        res.send(trip);
    });
};



exports.create_Trip = function (req, res) {
    var new_trip = new Trip(req.body);

    //handles null error 
    if (!new_trip.destination_school_id || !new_trip.trip_sec_id || !new_trip.child_home || !new_trip.driver_id || !new_trip.van_id || !new_trip.trip_date || !new_trip.trip_start_time || !new_trip.trip_end_time) {

        res.status(400).send({ error: true, message: 'Null values' });

    }
    else {

        Trip.createTrip(new_trip, function (err, trip) {

            if (err)
                res.send(err);
            res.json(trip);
        });
    }
};


exports.read_a_Trip = function (req, res) {
    Trip.gettripById(req.params.trip_id, function (err, trip) {
        if (err)
            res.send(err);
        res.json(trip);
    });
};


exports.update_Trip = function (req, res) {
    Trip.updateById(req.params.trip_id, new Trip(req.body), function (err, trip) {
        if (err)
            res.send(err);
        res.json(trip);
    });
};


exports.delete_Trip = function (req, res) {


    Trip.remove(req.params.trip_id, function (err, trip) {
        if (err)
            res.send(err);
        res.json({ message: 'Trip successfully deleted' });
    });
};