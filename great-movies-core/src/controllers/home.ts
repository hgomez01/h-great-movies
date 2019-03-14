import {Request, Response} from "express";

/* GET home page. */
export let index = (req: Request, res: Response) => {
    
    let testModel = require("../models/testModel");

    testModel.findOne({name: new RegExp('^J$', "i")}, (err: any, result: any) => {
        if(err) {
            console.log("Error retrieving data");
        } else {
            res.json(result);
        }
      });
};
