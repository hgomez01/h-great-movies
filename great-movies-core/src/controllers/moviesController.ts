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




// import * as mongoose from 'mongoose';
// var moviesModel = require("./../models/movie");

// exports.getAllMovies = function (request, response) {
//     console.log("get all movies");
//     moviesModel.find( function(error, movies)  {
//         console.log("inside find");
//         if (!error) {
//             console.log(movies);
//             response.json(movies);
//         } else {
//             console.log(error);
//             response.status(500).send(error);
//         }
//     });
// };
// // Dependencies
// var mongoose        = require('mongoose'),
//     Products        = require('./../models/productModel'),
//     ProductsHistory = require('./../models/productHistoryModel');
//
// // Getting all products 
// exports.findAllProducts = function (request, response) {
//     var filter = {};
//     // if filter name added in query then filtering
//     if (request.query.name) {
//         filter.name = new RegExp(request.query.name, 'i');
//     }
//     // Filter when want to get only active or deleted products
//     if (request.query.status) {
//         filter.status = request.query.status;
//     }
//     // Searching in db and passing filter if exists
//     Products.find(filter, function (error, prods) {
//         if (!error) {
//             response.json(prods);
//         } else {
//             response.status(500).send(error);
//         }
//     });
// };

