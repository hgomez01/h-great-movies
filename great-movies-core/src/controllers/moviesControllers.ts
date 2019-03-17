/* Gettings dependencies */
import * as express from "express";
const movieService = require('../services/movieService');

/* Initializing router */
let moviesRouter = express.Router();

/* Declaring routes and function to be called */
moviesRouter.get('/', movieService.getAllMovies);

/* Exporting router */
module.exports = moviesRouter;
