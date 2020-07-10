'user strict';
var sql = require('./db.js');

//CustomerChild object constructor
var Trip_Shedule = function (trip_shedule) {
    this.van_id = trip_shedule.van_id;
    this.destination_school_id = trip_shedule.destination_school_id;
    this.driver_id = trip_shedule.driver_id;
    this.trip_date =trip_shedule.trip_date;
    this.trip_exp_start_time = trip_shedule.trip_exp_start_time;
    this.trip_exp_end_time = trip_shedule.trip_exp_end_time;
};

Trip_Shedule.createTrip_Shedule = function (newtrip_shedule, result) {
    sql.query("INSERT INTO Trip_Shedule set ?", newtrip_shedule, function (err, res) {

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
Trip_Shedule.getTrip_SheduleById = function (trip_sec_id, result) {
    sql.query("Select * from Trip_Shedule where trip_sec_id = ? ", trip_sec_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Trip_Shedule.getAllTrip_Shedule = function (result) {
    sql.query("Select * from Trip_Shedule", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Trip Shedule : ', res);

            result(null, res);
        }
    });
};
Trip_Shedule.updateById = function (id, tshedule, result) {
    sql.query("UPDATE Trip_Shedule SET van_id = ?, destination_school_id = ?, driver_id = ?, trip_date = ? WHERE trip_sec_id = ?", [tshedule.van_id, tshedule.destination_school_id, tshedule.driver_id, tshedule.trip_date,id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Trip_Shedule.remove = function (id, result) {
    sql.query("DELETE FROM Trip_Shedule WHERE trip_sec_id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Trip_Shedule;