'use strict';

var Complaint_Responce = require('../model/complaintresponceModel.js');

exports.listAllComplainresp = function (req, res) {
    Complaint_Responce.getAllCcomplainresp(function (err, complaintresponse) {  

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', complaintresponse);
        res.send(complaintresponse);
    });
};



exports.create_Complainresp = function (req, res) {
    var new_complaintresp = new Complaint_Responce(req.body);

    //handles null error 
    if (!new_complaintresp.complaint_id || !new_complaintresp.action_taken_summary || !new_complaintresp.action_taken_desc ) {

        res.status(400).send({ error: true, message: 'Null values' });

    }
    else {

        Complaint_Responce.createComplaint_Responce(new_complaintresp, function (err, complaintresponse) {

            if (err)
                res.send(err);
            res.json(complaintresponse);
        });
    }
};


exports.read_a_complainresp = function (req, res) {
    Complaint_Responce.getcomplainrespById(req.params.complaint_response_id, function (err, complaintresponse) {
        if (err)
            res.send(err);
        res.json(complaintresponse);
    });
};


exports.update_complainresp = function (req, res) {
    Complaint_Responce.updateById(req.params.complaint_response, new Complaint_Responce(req.body), function (err, complaintresponse) {
        if (err)
            res.send(err);
        res.json(complaintresponse);
    });
};


exports.delete_complainresp = function (req, res) {


    Complaint_Responce.remove(req.params.complaint_response, function (err, complaintresponse) {
        if (err)
            res.send(err);
        res.json({ message: 'Complaint Response successfully deleted' });
    });
};