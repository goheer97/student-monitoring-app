'use strict';

var Child_Pickup = require('../model/childpickupModel.js');

exports.listAllChildPickup = function (req, res) {
    Child_Pickup.getAllchild_pickup(function (err, child_pickup) {  

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', child_pickup);
        res.send(child_pickup);
    });
};



exports.create_Childpickup = function (req, res) {
    var new_childpickup = new Child_Pickup(req.body);

    //handles null error 
    if (!new_childpickup.trip_id || !new_childpickup.customer_child_id || !new_childpickup.child_pickup_time || !new_childpickup.child_drop_off_time) {

        res.status(400).send({ error: true, message: 'Null values' });

    }
    else {

        Child_Pickup.createchild_pickup(new_childpickup, function (err, child_pick_up_stop) {

            if (err)
                res.send(err);
            res.json(child_pick_up_stop);
        });
    }
};


exports.read_childPickup = function (req, res) {
    Child_Pickup.getchildpickupById(req.params.child_pickup_id, function (err, child_pick_up_stop) {
        if (err)
            res.send(err);
        res.json(child_pick_up_stop);
    });
};


exports.update_childpickup = function (req, res) {
    Child_Pickup.updateById(req.params.child_pickup_id, new Child_Pickup(req.body), function (err, child_pick_up_stop) {
        if (err)
            res.send(err);
        res.json(child_pick_up_stop);
    });
};


exports.delete_childpickup = function (req, res) {


    Child_Pickup.remove(req.params.child_pickup_id, function (err, child_pickup) {
        if (err)
            res.send(err);
        res.json({ message: 'Child Pick Up successfully deleted' });
    });
};