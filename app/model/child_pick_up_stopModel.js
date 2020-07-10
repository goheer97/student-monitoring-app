'user strict';
var sql = require('./db.js');

//Child_pick_up_stop object constructor
var Child_pick_up_stop = function (child_pick_up_stop) {
    this.customer_child_id = child_pick_up_stop.customer_child_id;
    this.child_pick_up_address = child_pick_up_stop.child_pick_up_address;
    this.child_pick_up_loc_lat = child_pick_up_stop.child_pick_up_loc_lat;
    this.child_pick_up_loc_long =child_pick_up_stop.child_pick_up_loc_long;
};

Child_pick_up_stop.createPickupStop = function (newstop, result) {
    sql.query("INSERT INTO Child_Pick_Up_Stop set ?", newstop, function (err, res) {

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
Child_pick_up_stop.getStopId = function (stopId, result) {
    sql.query("Select * from Child_Pick_Up_Stop where stop_id = ? ", stopId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Child_pick_up_stop.getAllPickStop = function (result) {
    sql.query("Select * from Child_Pick_Up_Stop", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Pick Up Stop : ', res);

            result(null, res);
        }
    });
};
Child_pick_up_stop.updateById = function (id, pickstop, result) {
    sql.query("UPDATE Child_Pick_Up_Stop SET customer_child_id = ?, child_pick_up_address = ?, child_pick_up_loc_lat = ?, child_pick_up_loc_long = ? WHERE stop_id = ?", [pickstop.customer_child_id, pickstop.child_pick_up_address, pickstop.child_pick_up_loc_lat, pickstop.child_pick_up_loc_long, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Child_pick_up_stop.remove = function (id, result) {
    sql.query("DELETE FROM Child_Pick_Up_Stop WHERE stop_id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Child_pick_up_stop;