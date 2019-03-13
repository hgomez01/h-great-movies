const express = require('express');

let server = express();

// Setting environment port or setting one by default
let port = process.env.PORT || 3000;

server.set('hostname', "localhost");

server.listen(port, function () {
    console.log('Express server listening on - http://' + server.get("hostname") + ':' + port);
});

server.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});