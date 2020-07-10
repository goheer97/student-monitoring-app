'user strict';
var sql = require('./db.js');

//school_destination object constructor
var School_Destination = function (school_destination) {
    this.school_name = school_destination.school_name;
    this.school_address = school_destination.school_address;
    this.school_loc_lat = school_destination.school_loc_lat;
    this.school_loc_lon = school_destination.school_loc_lon;
};

School_Destination.createPickupStop = function (newdestination, result) {
    sql.query("INSERT INTO School_Destination set ?", newdestination, function (err, res) {

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
School_Destination.getSchoolId = function (schoolId, result) {
    sql.query("Select * from School_Destination where School_id = ? ", schoolId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
School_Destination.getAllDestination = function (result) {
    sql.query("Select * from School_Destination", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('School Destination : ', res);

            result(null, res);
        }
    });
};
School_Destination.updateById = function (id, dest, result) {
    sql.query("UPDATE School_Destination SET school_name = ?, school_address = ?, school_loc_lat = ?, school_loc_lon = ? WHERE school_id = ?", [dest.school_name, dest.school_address, dest.school_loc_lat, dest.school_loc_lon, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
School_Destination.remove = function (id, result) {
    sql.query("DELETE FROM School_Destination WHERE school_id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = School_Destination;