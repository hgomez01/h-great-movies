/* Gettings dependencies */
import * as express from "express";
var authMiddleware = require("./../middlewares/auth");
const transactionService = require('../services/TransactionsService');

/* Initializing router */
let transactRouter = express.Router();

/* Declaring routes and function to be called */
transactRouter.post('/buyrent', transactionService.buyRentMovie, authMiddleware.checkLoggedIn);
transactRouter.get('/penality/:id', transactionService.checkPenality, authMiddleware.checkLoggedIn);
transactRouter.post('/deliver', transactionService.deliverMovie, authMiddleware.checkLoggedIn);
transactRouter.get('/', transactionService.getTransactions, authMiddleware.checkLoggedIn);

/* Exporting router */
module.exports = transactRouter;
