'use strict';
module.exports = function (app) {
    var customerChildList = require('../controller/customerchildController');

    // CustomerChild Routes
    app.route('/customerChild')
        .get(customerChildList.listAllChildren)
        .post(customerChildList.create_customer_child);

    app.route('/customer/:customer_child_id')
        .get(customerChildList.read_customer_child)
        .put(customerChildList.update_customer_child)
        .delete(customerChildList.delete_customer_child);
};