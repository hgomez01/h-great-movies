import * as express from 'express';

const moviesRoutes = require('./v1');

let router = express.Router();

router.use('/v1', moviesRoutes);

module.exports = router;