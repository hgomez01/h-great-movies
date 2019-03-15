// import * as express from 'express';
const moviesModel = require('../../models/movie');

const getAllMovies = async(req, res, next) => {
    let movies = await moviesModel.find();

    if(!movies){
        return res.status(404).json({
            "errors":[{
                "msg" : " No movie has been found"
            }]
        })
    }

    return res.status(200).json({
        "success" : [{
            "data" : movies
        }]
    })
}

module.exports = {
    getAllMovies : getAllMovies
}
