import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// var globalRouter = express.Router();

/* Importing database connection */
const config = require("./configs/db");

/* Creating server */
const server = express();

/* setting usage of body parser for better experience working with json */
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Setting environment port or setting one by default
let port = process.env.PORT || 3000;

import * as homeController from "./routes/moviesRoutes";

// var movieRoutes = require('./routes/moviesRoutes')(express);

server.use('/api/movie', homeController);



console.log("######################################################################################3")
console.log("######################################################################################3")
console.log("######################################################################################3")

console.log("about to start connection");

mongoose
    .connect(config.database);

mongoose.connection.on('open', function (ref) {
    console.log('Connected again to mongo server.');
    //trying to get collection names
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        console.log(names); // [{ name: 'dbname.myCollection' }]
        // module.exports.Collection = names;


    });
});

var moviesModel = require("./models/movie");

console.log("get all movies");
    moviesModel.find( (error, movies:any) =>  {
        console.log("inside find");
            if(error) console.log(error);
            console.log(movies);
    }
);


console.log("connection closed");



// /* Creating database connection */
// mongoose
//     .connect(config.database)
//     .then(() => {
//         // Starting server once the connection with the db has been established
//         server.listen(port, function () {

//             console.log(`Express server listening on - http://localhost:${port}`);



//         });
//     })
//     .catch(err => console.log(`Could not establish connection with the database: ${err}`));
