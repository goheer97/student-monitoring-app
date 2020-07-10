'use strict';
module.exports = function (app) {
    var trip = require('../controller/tripController');

    // CustomerChild Routes
    app.route('/trip')
        .get(trip.listAllTrip)
        .post(trip.create_Trip);

    app.route('/customer/:trip_id')
        .get(trip.read_a_Trip)
        .put(trip.update_Trip)
        .delete(trip.delete_Trip);
};