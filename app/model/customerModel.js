'user strict';
var sql = require('./db.js');

//Task object constructor
var Customer = function (customer) {
    this.customer_name = customer.customer_name;
    this.customer_number = customer.customer_number;
    this.customer_email = customer.customer_email;
    this.customer_creation_date = new Date();
    this.customer_password = customer.customer_password;
};

Customer.createCustomer = function (newCustomer, result) {
    sql.query("INSERT INTO Customer set ?", newCustomer, function (err, res) {

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
Customer.getCustomerById = function (customer_id, result) {
    sql.query("Select * from Customer where customer_id = ? ", [customer_id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);  
        }
        else {
            console.log("costomerId: ", res);
            result(null, res);
        }
    });
};
Customer.getAllCustomer = function (result) {
    sql.query("Select * from Customer", function (err, res) {

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
Customer.updateById = function (id, customer, result) {
    sql.query("UPDATE Customer SET customer_name = ? , customer_number = ? , customer_email = ?, customer_creation_date = ?, customer_password = ? WHERE customer_id = ?", [customer.customer_name, customer.customer_number, customer.customer_email, customer.customer_creation_date, customer.customer_password, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Customer.remove = function (id, result) {
    sql.query("DELETE FROM Customer WHERE customer_id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

Customer.validate = function(body, result){
    sql.query("SELECT * FROM Customer where customer_email = ? AND customer_password = ?", ["ali@gmail.com", "aliwala"], function(err, res){
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
}

module.exports = Customer;