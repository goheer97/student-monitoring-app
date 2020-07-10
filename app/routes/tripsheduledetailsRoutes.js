'use strict';
module.exports = function (app) {
    var tripSheduleDet = require('../controller/tripsheduledetailsController');

    // CustomerChild Routes
    app.route('/tripSheduleDet')
        .get(tripSheduleDet.listAllTripSheduleDet)
        .post(tripSheduleDet.create_TripSheduleDet);

    app.route('/customer/:trip_sec_det_id')
        .get(tripSheduleDet.read_a_TripSheduleDet)
        .put(tripSheduleDet.update_TripSheduleDet)
        .delete(tripSheduleDet.delete_TripSheduleDet);
};