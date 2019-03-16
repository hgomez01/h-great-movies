/* File dependencies */
import * as mongoose from 'mongoose';
let moviesModel = require("./../models/movie");

exports.getAllMovies = function (request, response) {
    moviesModel.find((error, movies) => {
        if (!error) {
            response.json(movies);
        } else {
            response.status(500).send(error);
        }
    });
};
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

