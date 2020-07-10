'user strict';
var sql = require('./db.js');

//CustomerChild object constructor
var Child_Pickup = function (child_pickup) {
    this.trip_id = child_pickup.trip_id;
    this.customer_child_id = child_pickup.customer_child_id;
    this.child_pickup_time = child_pickup.child_pickup_time;
    this.child_drop_off_time = child_pickup.child_drop_off_time;
};

Child_Pickup.createchild_pickup = function (newchild_pickup, result) {
    sql.query("INSERT INTO Child_Pickup set ?", newchild_pickup, function (err, res) {

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
Child_Pickup.getchild_pickupById = function (childpickup, result) {
    sql.query("Select * from Child_Pickup where child_pickup_id = ? ", childpickup, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Child_Pickup.getAllchild_pickup = function (result) {
    sql.query("Select * from Child_Pickup", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Child Pickup : ', res);

            result(null, res);
        }
    });
};
Child_Pickup.updateById = function (id, pickup, result) {
    sql.query("UPDATE Child_Pickup SET trip_id = ?, customer_child_id = ?, child_pickup_time = ?, child_dropoff_time = ? WHERE driver_id = ?", [pickup.trip_id, pickup.customer_child_id, pickup.child_pickup_time, pickup.child_dropoff_time, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Child_Pickup.remove = function (id, result) {
    sql.query("DELETE FROM Child_Pickup WHERE child_pickup_id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Child_Pickup;