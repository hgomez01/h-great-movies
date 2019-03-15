import * as express from 'express';

const movieService = require('../services/movies/movies');

let movieRouter = express.Router();

movieRouter.get('/', movieService.getAllMovies);

module.exports = movieRouter;
