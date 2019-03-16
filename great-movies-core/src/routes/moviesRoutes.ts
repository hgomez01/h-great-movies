import * as express from "express";
import * as moviesController from "./../controllers/moviesController";
let movieRoute = express.Router();

/* GET home page. */
export let index = () => {
    
    movieRoute.route('/')
        .get(moviesController.allMovies);
    
    return movieRoute;
};
