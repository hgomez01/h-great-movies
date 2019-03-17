// Dependencies
import {Request, Response} from "express";
var PopularityModel = require("./../models/populatiry");


export const likeUnlikeMovie = (req: Request, res: Response) => {
    PopularityModel.findOne({
        movieId : req.body.movieId,
        userId : res.decoded.userId
    }, function (error, likeFound){
        if (error){
            return res.status(500).send({ success : false, message : error });
        } else if (likeFound) {
            if(likeFound.status == 'Liked'){
                likeFound.set({status : 'Unliked'});
            } else {
                likeFound.set({status : 'Liked'});
            }
            likeFound.save((err) => {
                if (err){
                    return res.status(500).send({ success : false, message : error });
                } else {
                    return res.status(201).send({ success : true, message: likeFound.status });
                }
            });
        } else {
            var newLike = new PopularityModel({
                movieId : req.body.movieId,
                userId : res.decoded.userId
            });
            newLike.save((error) => {
                if (error){
                    return res.status(500).send({ success : false, message : error });
                } else {
                    return res.status(201).send({ success : true, message: 'liked' });
                }
            })
        }
    });
};

export const likesNumberByProduct = (req: Request, res: Response) => {
    PopularityModel.count({movieId : req.params.movieId},function (err, likes){
        if (err){
            return res.status(500).send({ success : false, message : err });
        } else {
            return res.status(201).send({ success : false, message : likes });
        }
    });
};
