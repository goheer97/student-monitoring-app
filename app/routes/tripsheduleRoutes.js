'use strict';
module.exports = function (app) {
    var tripShedule = require('../controller/tripsheduleController');

    // CustomerChild Routes
    app.route('/tripShedule')
        .get(tripShedule.listAllTripShedule)
        .post(tripShedule.create_TripShedule);

    app.route('/customer/:trip_sec_id')
        .get(tripShedule.read_a_TripShedule)
        .put(tripShedule.update_TripShedule)
        .delete(tripShedule.delete_TripShedule);
};