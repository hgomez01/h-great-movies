/* Importing dependencies */
var express = require('express');
const moviesController = require("../../controllers/moviesControllers");
const authController = require("../../controllers/authController");

/* Initializing routes */
let router = express.Router();

/* Setting routes for API */
router.use('/movies', moviesController);
router.use('/auth', authController);

/* Exporting API routes */
module.exports = router;
