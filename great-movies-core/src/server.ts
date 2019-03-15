import express from "express";
import bodyParser from "body-parser";

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Setting environment port or setting one by default
let port = process.env.PORT || 3000;

// Starting server
server.listen(port, function () {
    console.log('Express server listening on - http://localhost:' + port);
});
