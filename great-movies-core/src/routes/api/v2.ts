/* Importing dependencies */
var express = require('express');
const moviesController = require("../../controllers/moviesControllers");
const authController = require("../../controllers/authController");
const likesController = require("../../controllers/popularityController");
const transactionsController = require("../../controllers/transactionController");

/* Initializing routes */
let router = express.Router();

/* Setting routes for API */
router.use('/movies', moviesController);
router.use('/auth', authController);
router.use('/likes', likesController);
router.use('/trans', transactionsController);

/* Exporting API routes */
module.exports = router;
