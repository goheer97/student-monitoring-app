'use strict';

var Customer_Child = require('../model/customerchildModel.js');

exports.listAllChildren = function (req, res) {
    Customer_Child.getAllChildren(function (err, customerchild) {  

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', customerchild);
        res.send(customerchild);
    });
};



exports.create_customer_child = function (req, res) {
    var new_customerchild = new Customer_Child(req.body);

    console.log(new_customerchild);
    //handles null error 
    if (!new_customerchild.customer_id || !new_customerchild.school_id || !new_customerchild.child_name) {
        console.log(new_customerchild);
        res.status(400).send({ error: true, message: 'Null values' });

    }
    else {

        Customer_Child.createChild(new_customerchild, function (err, customerchild) {

            if (err)
                res.send(err);
            res.json(customerchild);
        });
    }
};


exports.read_customer_child = function (req, res) {
    Customer_Child.getCustomerChildById(req.params.customer_child_id, function (err, customerchild) {
        if (err)
            res.send(err);
        res.json(customerchild);
    });
};


exports.update_customer_child = function (req, res) {
    Customer_Child.updateById(req.params.customer_child_id, new Customer_Child(req.body), function (err, customerchild) {
        if (err)
            res.send(err);
        res.json(customerchild);
    });
};


exports.delete_customer_child = function (req, res) {


    Customer_Child.remove(req.params.customer_child_id, function (err, customerchild) {
        if (err)
            res.send(err);
        res.json({ message: 'Customer Child successfully deleted' });
    });
};