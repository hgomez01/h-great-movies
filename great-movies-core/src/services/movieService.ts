/* Dependencies */
import {Request, Response} from "express";
var MoviesModel = require("./../models/movie");

/* Method to retrieve all movies */
export const getAllMovies = (req: Request, res: Response) => {

    MoviesModel.find( (err: any , results: any) => {
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
}
