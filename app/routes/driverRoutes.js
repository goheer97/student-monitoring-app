'use strict';
module.exports = function (app) {
    var driver = require('../controller/driverController');

    // CustomerChild Routes
    app.route('/driver')
        .get(driver.listAllDriver)
        .post(driver.create_Driver);

    app.route('/driver/:driver_id')
        .get(driver.read_a_driver)
        .put(driver.update_driver)
        .delete(driver.delete_driver);
};