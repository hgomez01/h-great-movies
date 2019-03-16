/* File dependencies */
import {Request, Response} from "express";

export let allMovies = (req: Request, res: Response) => {
    
    let prodModels = require("../models/movie");

    prodModels.find((err: any, result: any) => {
        if(err) {
            console.log("Error retrieving data");
        } else {
            console.log("reading from db");
            res.json(result);
        }
      });
};
