'user strict';
var sql = require('./db.js');

//CustomerChild object constructor
var CustomerChild = function (customerChild) {
    this.customer_id = customerChild.customer_id;
    this.school_id = customerChild.school_id;
    this.child_created = new Date();
    this.child_name =customerChild.child_name;
};

CustomerChild.createChild = function (newChild, result) {
    sql.query("INSERT INTO Customer_Child set ?", newChild, function (err, res) {

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
CustomerChild.getChildById = function (childId, result) {
    sql.query("Select * from Customer_Child where customer_child_id = ? ", childId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
CustomerChild.getAllChildren = function (result) {
    sql.query("Select * from Customer_Child", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Children : ', res);

            result(null, res);
        }
    });
};
CustomerChild.updateById = function (id, cchild, result) {
    sql.query("UPDATE Customer_Child SET customer_id = ?, school_id = ?, child_created = ?, child_name = ? WHERE customer_child_id = ?", [cchild.customer_id, cchild.school_id, cchild.child_created, cchild.child_name, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
CustomerChild.remove = function (id, result) {
    sql.query("DELETE FROM Customer_Child WHERE customer_child_id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = CustomerChild;