'user strict';
var sql = require('./db.js');

//Task object constructor
var Van = function (van) {
    this.shipment_date = van.shipment_date;
    this.van_reg_no = van.van_reg_no;
    this.van_model = van.van_model;
};

Van.createVan = function (newVan, result) {
    sql.query("INSERT INTO Van set ?", newVan, function (err, res) {

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
Van.getVanById = function (van_id, result) {
    sql.query("Select * from Van where van_id = ? ", van_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Van.getAllVan = function (result) {
    sql.query("Select * from Van", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tasks : ', res);

            result(null, res);
        }
    });
};
Van.updateById = function (id, van, result) {
    sql.query("UPDATE Van SET shipment_date = ?, van_reg_no = ?, van_model = ? where van_id = ?", [van.shipment_date, van.van_reg_no, van.van_model, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Van.remove = function (id, result) {
    sql.query("DELETE FROM Van WHERE van_id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Van;