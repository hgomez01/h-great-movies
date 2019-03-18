/* Dependencies */
import { Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

var UserModel = require("./../models/user");
var sconf = require("./../configs/local");

var salt = bcrypt.genSaltSync(10);

/* Sign up user */
const signup = (req: Request, resp: Response) => {
    /* Body validations to can register a new user */
    if (!req.body.email) {
        return responseMessages(resp, 'email is required');
    } else if (!req.body.password) {
        return responseMessages(resp, 'password is required');
    } else if (!req.body.name) {
        return responseMessages(resp, 'name is required');
    }
    /* Hashing password */
    var hashedPass = bcrypt.hashSync(req.body.password, salt);
    /* Creating new user */
    var user = new UserModel(req.body);
    user.password = hashedPass;
    user.save((error) => {
        if (error) {
            return responseMessages(resp, `error registering user: ${error.errmsg}`);
        } else {
            return resp.status(201).json({
                success: true,
                message: 'user registered successfully'
            });
        }
    });
};

/* Login in user */
const signIn = (req: Request, resp: Response) => {
    /* Searching for current user by email */
    UserModel.findOne({
        email : req.body.email
    }, (err, user) => {
        if (err){
            return responseMessages(resp, `Internal Error: ${err}`);
        } else if ( !user ) {
            /* Sending message when user is not found */
            return responseMessages(resp, 'user not found', 401);
        } else {
            /* Checking if passwords match */
            if( bcrypt.compareSync(req.body.password, user.password) ){

                let uIsAdmin = user.role == 'Admin';
                /* Creating payload */
                var payload = { isAdmin : uIsAdmin, userId : user._id };
                /* Creating token */
                var token = jwt.sign(payload, sconf.secretKey, {
                    expiresIn : 18000 /* Expiration time: 5 hours */
                });
                return resp.status(200).json({success : true, message:'Authorized', token : token, userId : user._id});
            } else {
                return responseMessages(resp, 'User unauthorized',401);
            }
        }
    });
};

/* Login in user */
const signOut = (req: Request, resp: Response) => {
    /* Searching for current user by email */
    return resp.status(200).json({auth : false, token : null});
};

let responseMessages = (response, msg, statusCode = 500) => {
    return response.status(statusCode).json({
        success: false,
        message: msg
    });
};

module.exports = {
    signup  : signup,
    signIn  : signIn,
    signOut : signOut
}
