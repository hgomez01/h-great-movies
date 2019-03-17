/* Importing dependencies */
const apiRoute = require('./api');

/* Intercepting all routes */
const init = (server) => {
    server.get('*', (req, res, next) => {
        console.log('Request made to the endpoint: ' + req.originalUrl);
        return next();
    });

    server.use('/api', apiRoute);
}

/* Exporting routes */
module.exports = {
    init: init
};
