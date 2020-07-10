'use strict';
module.exports = function (app) {
    var pickupstop = require('../controller/child_pickup_stopController');

    // CustomerChild Routes
    app.route('/ChildPickupStop')
        .get(pickupstop.listAllChildStop)
        .post(pickupstop.create_ChildStop);

    app.route('/customer/:stop_id')
        .get(pickupstop.read_childPickupStop)
        .put(pickupstop.update_childPickupStop)
        .delete(pickupstop.delete_childPickUpStop);
};