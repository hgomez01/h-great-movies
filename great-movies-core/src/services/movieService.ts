/* Dependencies */
import {Request, Response} from "express";
var MoviesModel = require("./../models/movie");
var MoviesHistoryModel = require("./../models/movieHistory");

/* Method to retrieve all movies */
export const getAllMovies = (req: Request, res: Response) => {

    let moviefilter = {};
    // Filtering by title
    if (req.query.title) {
        moviefilter['title'] = new RegExp(req.query.title, 'i');
    }
    // Filtering by status
    if (req.query.status) {
        moviefilter['status'] = req.query.status;
    }
    // Filtering by availability
    if (req.query.availability) {
        moviefilter['availability'] = req.query.availability;
    }

    MoviesModel.find(moviefilter, (err: any , results: any) => {
        if(err) {
            console.log(err);
            return res.status(500).json({
                'error': 'An error has occurred retrieving all movies',
            });
        } else {
            return res.status(200).json({
                'data': results
            })
        }
    });
};

// Get movie by Id
export const findMovieById = (req: Request, resp: Response) => {
    MoviesModel.findById( req.params.id, function( err, film ) {
        if (err){
            return resp.status(500).send(err);
        } else if( film ) {
            return resp.send( film );
        } else {
            return resp.status(404).send('Product not found');
        }
    });
};

// Add a new movie
export const addMovie = (req: Request, res: Response) => {
    var movie = new MoviesModel(req.body);
    movie.save( function (error){
        if (error){
            return res.status(500).send(error);
        } else {
            var filmHistory = new MoviesHistoryModel ({
                productId: movie._id,
                title: movie.title,
                rentalPrice : movie.rentalPrice,
                salePrice : movie.salePrice
            });
            filmHistory.save(function(err){
                if (err){
                    return res.status(500).send(err);
                } else {
                    return res.status(201).send(movie);
                }
            });
        }
    });
};

// Get movie by Identifier
export const removeMovieById = (req: Request, resp: Response) => {
    MoviesModel.findById( req.params.id, function( err, film ) {
        if (err){
            resp.status(500).send(err);
        } else if( film ) {
            film.status = 'Deleted'
            film.save( function (error) {
                if(error){
                   return resp.status(500).send('error removing' + error);
                } else {
                    return resp.status(200).send(film);
                }
            })
            return resp.send( film );
        } else {
            return resp.status(404).send('Movie not found');
        }
    });
};

// Updating movies
export const updateMovie = (req: Request, res: Response) => {
    // Getting movie by its identifier
    MoviesModel.findById( req.body.id, function( error, movie ) {
        if ( error ){
            return res.status(500).send(error);
        } else {
            // Updating amount if is coming
            if (req.body.stock) {
                movie.set({stock : req.body.stock})
            // Updating price if is coming in request
            } else if (req.body.rentalPrice) {
                movie.set({rentalPrice : req.body.rentalPrice})
            }
            else if (req.body.salePrice) {
                movie.set({salePrice : req.body.salePrice})
            }
            // Updating entry in database
            movie.save( function (err, updatedMovie) {
                if (err) {
                    // sending error if exists
                    res.status(500).send(err);
                } else {
                    // Creating a new record for the product history
                    var filmHistory = new MoviesHistoryModel ({
                        productId: updatedMovie._id,
                        title: updatedMovie.title,
                        rentalPrice : updatedMovie.rentalPrice,
                        salePrice : updatedMovie.salePrice
                    });
                    // Storing in the history table the change made
                    filmHistory.save((historyError) => {
                        if (historyError){
                            return res.status(500).send(historyError);
                        } else {
                            // returning back the movie
                            return res.status(201).send(updatedMovie);
                        }
                    });
                }
            });
        }
    });
};
