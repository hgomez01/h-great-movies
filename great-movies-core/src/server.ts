import express from "express";
import bodyParser from "body-parser";

// Controllers (route handlers)
import * as homeController from "./controllers/home";

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


server.get('/', homeController.index);

// Setting environment port or setting one by default
let port = process.env.PORT || 3000;

server.listen(port, function () {
    console.log('Express server listening on - http://localhost:' + port);
});
