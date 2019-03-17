/* Importing dependencies */
var express = require('express');
const v2ApiRoutes = require('./v2');

/* Initializing routes */
let v2Router = express.Router();

/* Appending v2 to the Api's routes */
v2Router.use('/v2', v2ApiRoutes);

/* Exporting route */
module.exports = v2Router;
