'user strict';
var sql = require('./db.js');

//CustomerChild object constructor
var Complaint = function (complaint) {
    this.customer_id = complaint.customer_id;
    this.customer_child_id = complaint.customer_child_id;
    this.trip_id = complaint.trip_id;
    this.complaint_type =complaint.complaint_type;
    this.complaint_desc = complaint.complaint_desc;
    this.complaint_status = 1;
};

Complaint.createComplaint = function (newComplaint, result) {
    console.log("Model");

    sql.query("INSERT INTO Complaint set ?", newComplaint, function (err, res) {

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
Complaint.getComplaintById = function (complaint_id, result) {
    sql.query("Select * from Complaint where complaint_id = ? ", complaint_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Complaint.getAllComplaint = function (result) {
    sql.query("Select * from Complaint", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Complaint : ', res);

            result(null, res);
        }
    });
};
Complaint.updateById = function (id, compl, result) {
    sql.query("UPDATE Complaint SET customer_id = ?, customer_child_id = ?, trip_id = ?, complaint_type = ?, complaint_desc = ?, Complaint_status = ? WHERE Complaint_id = ?", [compl.customer_id, compl.customer_child_id, compl.trip_id, compl.complaint_type, compl.complaint_desc, compl.complaint_status, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Complaint.remove = function (id, result) {
    sql.query("DELETE FROM Complaint WHERE complaint_id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Complaint;