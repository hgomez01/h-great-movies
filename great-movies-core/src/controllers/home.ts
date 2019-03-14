import {Request, Response} from "express";

/* GET home page. */
export let index = (req: Request, res: Response) => {
    
    let testModel = require("../models/testModel");

    testModel.find((err: any, result: any) => {
        if(err) {
            console.log("Error retrieving data");
        } else {
            console.log("reading from db");
            res.json(result);
        }
      });
};
