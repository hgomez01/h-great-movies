import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

/* */
const server = express();
const config = require("./configs/db");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Setting environment port or setting one by default
let port = process.env.PORT || 3000;

/* Creating database connection */
mongoose
    .connect(config.database)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Starting server
server.listen(port, function () {
    console.log('Express server listening on - http://localhost:' + port);
});
