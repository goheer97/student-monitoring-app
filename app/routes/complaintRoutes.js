'use strict';
module.exports = function (app) {
    var complaint = require('../controller/complaintController');

    // CustomerChild Routes
    app.route('/complaint')
        .get(complaint.listAllComplain)
        .post(complaint.create_Complain);

    app.route('/complaint/:complaint_id')
        .get(complaint.read_a_complain)
        .put(complaint.update_complain)
        .delete(complaint.delete_complain);
};