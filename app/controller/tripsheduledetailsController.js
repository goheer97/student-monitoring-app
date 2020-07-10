'use strict';

var Trip_Shedule_Details = require('../model/tripsheduledetailsModel.js');

exports.listAllTripSheduleDet = function (req, res) {
    Trip_Shedule_Details.getAllTripSheduleDet(function (err, tripsheduledet) {  

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', tripsheduledet);
        res.send(tripsheduledet);
    });
};



exports.create_TripSheduleDet = function (req, res) {
    var new_tripdetails = new Trip_Shedule_Details(req.body);

    //handles null error 
    if (!new_tripdetails.trip_sec_id || !new_tripdetails.customer_child_id || !new_tripdetails.child_exp_pickup_time || !new_tripdetails.child_exp_dropoff_time) {

        res.status(400).send({ error: true, message: 'Null values' });

    }
    else {

        Trip_Shedule_Details.createTrip_Shedule_Details(new_tripdetails, function (err, tripsheduledet) {

            if (err)
                res.send(err);
            res.json(tripsheduledet);
        });
    }
};


exports.read_a_TripSheduleDet = function (req, res) {
    Trip_Shedule_Details.gettripById(req.params.trip_sec_det_id, function (err, tripsheduledet) {
        if (err)
            res.send(err);
        res.json(tripsheduledet);
    });
};


exports.update_TripSheduleDet = function (req, res) {
    Trip_Shedule_Details.updateById(req.params.trip_sec_det_id, new Trip_Shedule_Details(req.body), function (err, tripsheduledet) {
        if (err)
            res.send(err);
        res.json(tripsheduledet);
    });
};


exports.delete_TripSheduleDet = function (req, res) {


    Trip_Shedule_Details.remove(req.params.trip_sec_det_id, function (err, tripsheduledet) {
        if (err)
            res.send(err);
        res.json({ message: 'Trip Shedule Details successfully deleted' });
    });
};