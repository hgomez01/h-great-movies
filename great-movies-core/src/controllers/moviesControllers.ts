/* Gettings dependencies */
import * as express from "express";
var authMiddleware = require("./../middlewares/auth");
const movieService = require('../services/movieService');

/* Initializing router */
let moviesRouter = express.Router();

/* Declaring routes and function to be called */
moviesRouter.get('/', movieService.getAllMovies);
moviesRouter.get('/:movieId', movieService.findMovieById, authMiddleware.checkLoggedIn);
moviesRouter.post('/', movieService.addMovie, authMiddleware.checkIsAdmin);
moviesRouter.put('/', movieService.updateMovie, authMiddleware.checkIsAdmin);
moviesRouter.delete('/:movieId', movieService.removeMovieById, authMiddleware.checkIsAdmin);

/* Exporting router */
module.exports = moviesRouter;
