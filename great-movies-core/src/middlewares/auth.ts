import * as jwt from 'jsonwebtoken';
import * as express from 'express';

const sconf = require('./../configs/local');

const checkLoggedIn = (req, res, next) => {
    let token = tokenFound(req);
    if ( !token ) {
        // Returning when no token has been provided
        return forbiddenMessage(res, 'Any token has been provided');
    } else {
        jwt.verify(token, sconf.secretKey, (error, decoded) => {
            if (error){
                // Returning when token is invalid
                return forbiddenMessage(res, 'Failed to authenticate against token. Try login again');
            } else {
                res.decoded = decoded;
                next();
            }
        })
    }
};

const checkIsAdmin = (req, res, next) => {
    var token = tokenFound(req);
    if ( !token ) {
        // Returning when no token has been provided
        return forbiddenMessage(res, 'Any token has been provided');
    } else {
        jwt.verify(token, sconf.secretKey, (error, decoded) => {
            if (error) {
                // Returning when token is invalid
                return forbiddenMessage(res, 'Failed to authenticate against token. Try login again');
            } else {
                if( !decoded.isAdmin ){
                    // Returning not enough permissions
                    return forbiddenMessage(res, 'Unauthorized to process request');
                } else {
                    res.decoded = decoded;
                    next();
                }
            }
        })
    }
};

// Function to return forbidden message response
let tokenFound = (request) => {
    return request.body.token || request.query.token || request.headers['x-access-token'];
};

// Function to return forbidden message response
let forbiddenMessage = (response, message) =>{
    return response.status(403).send({
        success : false,
        message : message
    });
};

module.exports = {
    checkLoggedIn : checkLoggedIn,
    checkIsAdmin  : checkIsAdmin
}
