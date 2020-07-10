'user strict';
var sql = require('./db.js');

//CustomerChild object constructor
var Trip = function (trip) {
    this.destination_school_id = trip.destination_school_id;
    this.trip_sec_id = trip.trip_sec_id;
    this.child_home_id = trip.child_home_id;
    this.driver_id =trip.driver_id;
    this.van_id = trip.van_id;
    this.trip_date = trip.trip_date;
    this.trip_start_time = trip.trip_start_time;
    this.trip_end_time = trip.trip_end_time;
};

Trip.createTrip = function (newTrip, result) {
    sql.query("INSERT INTO Trip set ?", newTrip, function (err, res) {

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
Trip.getTripById = function (trip_id, result) {
    sql.query("Select * from Trip where trip_id = ? ", trip_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Trip.getAllTrip = function (result) {
    sql.query("Select * from Trip", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Trip : ', res);

            result(null, res);
        }
    });
};
Trip.updateById = function (id, trip, result) {
    sql.query("UPDATE Trip SET destination_school_id = ?, trip_sec_id = ?, child_home_id = ?, driver_id = ?, van_id = ?, trip_date = ? WHERE trip_id = ?", [trip.destination_school_id, trip.trip_sec_id, trip.child_home_id, trip.driver_id, trip.van_id, trip.trip_date, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Trip.remove = function (id, result) {
    sql.query("DELETE FROM Trip WHERE trip_id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Trip;