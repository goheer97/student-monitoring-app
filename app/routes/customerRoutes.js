'use strict';
module.exports = function (app) {
    var customerList = require('../controller/customerController');

    // Customer Routes
    app.route('/customer')
        .get(customerList.listAllCustomers)
        .post(customerList.create_a_customer);

    app.route('/customer/:customer_id')
        .get(customerList.read_a_customer)
        .put(customerList.update_a_customer)
        .delete(customerList.delete_a_customer);
    
    app.route('/user/login')
        .put(customerList.validate_a_customer);
    
};