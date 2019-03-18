/* Gettings dependencies */
import * as express from "express";
var authMiddleware = require("./../middlewares/auth");
const userService = require('../services/usersService');

/* Initializing router */
let authRouter = express.Router();

/* Declaring routes and function to be called */
authRouter.post('/login', userService.signIn);
authRouter.post('/signup', userService.signup);
authRouter.get('/logout', userService.signOut, authMiddleware.checkLoggedIn)

/* Exporting router */
module.exports = authRouter;
