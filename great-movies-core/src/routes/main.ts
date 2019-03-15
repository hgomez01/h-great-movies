const apiRoutes = require('./api');

const init = (server) => {
    server.get('*', (req, res, next) => { return next(); });

    /* Adding api routes to server */
    server.use('/api', apiRoutes);
}
module.exports = {
    init: init
};
