'user strict';
var sql = require('./db.js');

//CustomerChild object constructor
var Driver = function (driver) {
    this.driver_name = driver.driver_name;
    this.driver_contact_no = driver.driver_contact_no;
    this.driver_cnic =driver.driver_cnic;
    this.driver_address = driver.driver_address;
    this.driver_joined_date = new Date();
};

Driver.createDriver = function (newDriver, result) {
    sql.query("INSERT INTO Driver set ?", newDriver, function (err, res) {

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
Driver.getDriverById = function (driver_id, result) {
    sql.query("Select * from Driver where driver_id = ? ", driver_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Driver.getAllDriver = function (result) {
    sql.query("Select * from Driver", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Driver : ', res);

            result(null, res);
        }
    });
};
Driver.updateById = function (id, driver, result) {
    sql.query("UPDATE Driver SET driver_name = ?, driver_contact_no = ?, driver_cnic = ?, driver_address = ?, Driver_joined_date = ? WHERE driver_id = ?", [driver.driver_name, driver.driver_contact_no, driver.driver_cnic, driver.driver_address, driver.driver_joined_date, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Driver.remove = function (id, result) {
    sql.query("DELETE FROM Driver WHERE driver_id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Driver;