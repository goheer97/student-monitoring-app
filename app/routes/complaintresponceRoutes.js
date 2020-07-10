'use strict';
module.exports = function (app) {
    var complaintResponse = require('../controller/complaintresponceControllr');

    // CustomerChild Routes
    app.route('/complaintResponse')
        .get(complaintResponse.listAllComplainresp)
        .post(complaintResponse.create_Complainresp);

    app.route('/complaintResponse/:complaint_response_id')
        .get(complaintResponse.read_a_complainresp)
        .put(complaintResponse.update_complainresp)
        .delete(complaintResponse.delete_complainresp);
};