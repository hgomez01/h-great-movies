/* Gettings dependencies */
import * as express from "express";
var authMiddleware = require("./../middlewares/auth");
const popularityService = require('../services/popularityService');

/* Initializing router */
let likesRouter = express.Router();

/* Declaring routes and function to be called */
likesRouter.get('/:movieId', popularityService.likesNumberByProduct, authMiddleware.checkLoggedIn);
likesRouter.post('/', popularityService.signlikeUnlikeMovieup, authMiddleware.checkLoggedIn);


/* Exporting router */
module.exports = likesRouter;
