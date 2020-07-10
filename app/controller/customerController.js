'use strict';

var Customer = require('../model/customerModel.js');

exports.listAllCustomers = function (req, res) {
    Customer.getAllCustomer(function (err, customer) {  

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', customer);
        res.send(customer);
    });
};



exports.create_a_customer = function (req, res) {
    var new_customer = new Customer(req.body);

    //handles null error 
    if (!new_customer.customer_name || !new_customer.customer_number || !new_customer.customer_email || !new_customer.customer_password) {

        res.status(400).send({ error: true, message: 'Null values' });

    }
    else {

        Customer.createCustomer(new_customer, function (err, customer) {

            if (err)
                res.send(err);
            res.json(customer);
        });
    }
};


exports.read_a_customer = function (req, res) {
    Customer.getCustomerById(req.params.customer_id, function (err, customer) {
        if (err)
            res.send(err);
        res.json(customer);
    });
};


exports.update_a_customer = function (req, res) {
    Customer.updateById(req.params.customer_id, new Customer(req.body), function (err, customer) {
        if (err)
            res.send(err);
        res.json(customer);
    });
};


exports.delete_a_customer = function (req, res) {


    Customer.remove(req.params.customer_id, function (err, customer) {
        if (err)
            res.send(err);
        res.json({ message: 'Customer successfully deleted' });
    });
};

exports.validate_a_customer = function (req, res){
    console.log("here validating");
    console.log(req.body.customer_password);
    Customer.validate(req.body, function(err, customer){
        if(err)
            res.send(err);
        res.json(customer);
        
    });
};