'use strict';
module.exports = function (app) {
    var van = require('../controller/vanController');

    // CustomerChild Routes
    app.route('/van')
        .get(van.listAllVan)
        .post(van.createVan);

    app.route('/van/:van_id')
        .get(van.read_a_Van)
        .put(van.update_Van)
        .delete(van.delete_a_Van);
};