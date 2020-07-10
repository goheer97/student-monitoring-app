'user strict';
var sql = require('./db.js');

//CustomerChild object constructor
var Complaint_Responce = function (complaint_responce) {
    this.complaint_id = complaint_responce.complaint_id;
    this.action_taken_summary = complaint_responce.action_taken_summary;
    this.action_taken_desc = complaint_responce.action_taken_desc;
};

Complaint_Responce.createComplaint_Responce = function (newcomplaint_responce, result) {
    sql.query("INSERT INTO Complaint_Responce set ?", newcomplaint_responce, function (err, res) {

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
Complaint_Responce.getComplaint_ResponceById = function (complaint_responce, result) {
    sql.query("Select * from Complaint_Responce where complaint_responce_id = ? ", complaint_responce, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Complaint_Responce.getAllComplaint_Responce = function (result) {
    sql.query("Select * from Complaint_Responce", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Complaint_Responce : ', res);

            result(null, res);
        }
    });
};
Complaint_Responce.updateById = function (id, complr, result) {
    sql.query("UPDATE Complaint_Responce SET complaint_id = ?, action_taken_summary = ?, action_taken_desc = ? WHERE complaint_response_id = ?", [complr.complaint_id, complr.action_taken_summary, complr.action_taken_desc, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Complaint_Responce.remove = function (id, result) {
    sql.query("DELETE FROM Complaint_Responce WHERE complaint_responce_id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Complaint_Responce;