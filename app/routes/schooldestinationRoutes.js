'use strict';
module.exports = function (app) {
    var schoolDest = require('../controller/shooldestinationController');

    // CustomerChild Routes
    app.route('/schoolDest')
        .get(schoolDest.listAllSchoolDest)
        .post(schoolDest.create_SchoolDest);

    app.route('/customer/:school_id')
        .get(schoolDest.read_a_SchoolDest)
        .put(schoolDest.update_SchoolDest)
        .delete(schoolDest.delete_SchoolDest);
};