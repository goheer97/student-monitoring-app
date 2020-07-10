const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
});
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/customerRoutes.js'); //importing route
routes(app); //register the route

routes = require('./app/routes/customerchildRoutes.js'); 
routes(app);

routes = require('./app/routes/schooldestinationRoutes.js'); 
routes(app);

routes = require('./app/routes/vanRoutes.js');
routes(app);

routes = require('./app/routes/driverRoutes.js');
routes(app);

routes = require('./app/routes/childpickupRoutes.js');
routes(app);

routes = require('./app/routes/complaintRoutes.js');
routes(app);

