'use strict';

var Child_Pick_Up_Stop = require('../model/child_pick_up_stopModel.js');

exports.listAllChildStop = function (req, res) {
    Child_Pick_Up_Stop.getAllChildStop(function (err, child_pick_up_stop) {  

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', child_pick_up_stop);
        res.send(child_pick_up_stop);
    });
};



exports.create_ChildStop = function (req, res) {
    var new_childstop = new Child_Pick_Up_Stop(req.body);

    //handles null error 
    if (!new_childstop.customer_child_id || !new_childstop.child_pick_up_address || !new_childstop.child_pick_up_loc_lat || !new_childstop.child_pick_up_loc_long) {

        res.status(400).send({ error: true, message: 'Null values' });

    }
    else {

        Child_Pick_Up_Stop.createPickupStop(new_childstop, function (err, child_pick_up_stop) {

            if (err)
                res.send(err);
            res.json(child_pick_up_stop);
        });
    }
};


exports.read_childPickupStop = function (req, res) {
    Child_Pick_Up_Stop.getCustomerById(req.params.stop_id, function (err, child_pick_up_stop) {
        if (err)
            res.send(err);
        res.json(child_pick_up_stop);
    });
};


exports.update_childPickupStop = function (req, res) {
    Child_Pick_Up_Stop.updateById(req.params.stop_id, new Child_Pick_Up_Stop.updateById(req.params.stop_id, new Customer(req.body), function (err, child_pick_up_stop) {
        (req.body), function (err, child_pick_up_stop) {
        if (err)
            res.send(err);
        res.json(child_pick_up_stop);
    });
};


exports.delete_childPickUpStop = function (req, res) {


    Child_Pick_Up_Stop.remove(req.params.stop_id, function (err, child_pick_up_stop) {
        if (err)
            res.send(err);
        res.json({ message: 'Child Pick Up Stop successfully deleted' });
    });
};