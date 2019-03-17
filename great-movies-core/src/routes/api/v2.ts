/* Importing dependencies */
var express = require('express');
const moviesController = require("../../controllers/moviesControllers");

/* Initializing routes */
let router = express.Router();

/* Setting routes for API */
router.use('/movies', moviesController);

/* Exporting API routes */
module.exports = router;
