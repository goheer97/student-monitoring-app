'use strict';

var Complaint = require('../model/complaintModel.js');

exports.listAllComplain = function (req, res) {
    Complaint.getAllCcomplain(function (err, complaint) {  

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', complaint);
        res.send(complaint);
    });
};



exports.create_Complain = function (req, res) {
    var new_complaint = new Complaint(req.body);

    //handles null error 
    if (!new_complaint.customer_id || !new_complaint.complaint_type || !new_complaint.complaint_desc) {

        res.status(400).send({ error: true, message: 'Null values' });

    }
    else {
            console.log("controler");
        Complaint.createComplaint(new_complaint, function (err, complaint) {

            if (err)
                res.send(err);
            res.json(complaint);
        });
    }
};


exports.read_a_complain = function (req, res) {
    Complaint.getcomplainById(req.params.complaint_id, function (err, complaint) {
        if (err)
            res.send(err);
        res.json(complaint);
    });
};


exports.update_complain = function (req, res) {
    Complaint.updateById(req.params.complaint_id, new Complaint(req.body), function (err, complaint) {
        if (err)
            res.send(err);
        res.json(complaint);
    });
};


exports.delete_complain = function (req, res) {


    Complaint.remove(req.params.complaint_id, function (err, complaint) {
        if (err)
            res.send(err);
        res.json({ message: 'Complaint successfully deleted' });
    });
};