import * as express from 'express';

const moviesController = require('../../controllers/movies');

let router = express.Router();

router.use('/movies', moviesController);

module.exports = router;
