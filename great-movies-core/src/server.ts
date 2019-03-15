import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

/* Importing database connection */
const config = require("./configs/db");

/* Creating server */
const server = express();

/* setting usage of body parser for better experience working with json */
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Setting environment port or setting one by default
let port = process.env.PORT || 3000;

/* Creating database connection */
mongoose
    .connect(config.database)
    .then(() => {
        // Starting server once the connection with the db has been established
        server.listen(port, function () {
            console.log(`Express server listening on - http://localhost:${port}`);
        });
    })
    .catch(err => console.log(`Could not establish connection with the database: ${err}`));
