import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// Controllers (route handlers)
import * as homeController from "./controllers/home";


const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


mongoose
    .connect("mongodb://mongo:27017", {useMongoClient: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

server.get('/', homeController.index);

// Setting environment port or setting one by default
let port = process.env.PORT || 3000;

server.listen(port, function () {
    console.log('Express server listening on - http://localhost:' + port);
});
