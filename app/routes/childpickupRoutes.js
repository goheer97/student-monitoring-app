'use strict';
module.exports = function (app) {
    var childPickup = require('../controller/childpickupController');

    // CustomerChild Routes
    app.route('/ChildPickup')
        .get(childPickup.listAllChildPickup)
        .post(childPickup.create_Childpickup);

    app.route('/customer/:child_pickup_id')
        .get(childPickup.read_childPickup)
        .put(childPickup.update_childpickup)
        .delete(childPickup.delete_childpickup);
};