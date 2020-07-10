'user strict';
var sql = require('./db.js');

//CustomerChild object constructor
var Trip_Shedule_Details = function (trip_shedule_details) {
    this.trip_sec_id = trip_shedule_details.trip_sec_id;
    this.customer_child_id = trip_shedule_details.customer_child_id;
    this.child_exp_pickup_time = trip_shedule_details.child_exp_pickup_time;
    this.child_exp_dropoff_time = trip_shedule_details.child_exp_dropoff_time;
};

Trip_Shedule_Details.createTrip_Shedule_Details = function (newtrip_sheduledetaild, result) {
    sql.query("INSERT INTO Trip_Shedule_Details set ?", newtrip_sheduledetails, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Trip_Shedule_Details.getTrip_SheduleDetailsById = function (trip_sec_det_id, result) {
    sql.query("Select * from Trip_Shedule_Details where trip_sec_det_id = ? ", trip_sec_det_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Trip_Shedule_Details.getAllTrip_Sheduledetails = function (result) {
    sql.query("Select * from Trip_Shedule_Details", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Trip Shedule Details : ', res);

            result(null, res);
        }
    });
};
Trip_Shedule_Details.updateById = function (id, tsheduledet, result) {
    sql.query("UPDATE Trip_Shedule_Details SET trip_sec_id = ?, customer_child_id = ? WHERE trip_sec_det_id = ?", [tsheduledet.trip_sec_id, tsheduledet.customer_child_id, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Trip_Shedule_Details.remove = function (id, result) {
    sql.query("DELETE FROM Trip_Shedule_Details WHERE trip_sec_det_id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Trip_Shedule_Details;