import mongoose from 'mongoose';

mongoose.Promise = require('bluebird');
mongoose.connect("mongodb://mongo:27017");

const test_Schema = require("../models/testModel");

test_Schema.collection.drop();

// Event.collection.drop();
test_Schema
    .create([
        {name: "user01", email : "e@mail.com", description: "46546464"},
        {name: "user02", email : "user02@mail.com", description: "sdhkfsdhfjksd"},
        {name: "user03", email : "test03@mail.com", description: "fake description"},
    ])
    .then(tmodel => {
        console.log(`${tmodel.length} users created`);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        mongoose.connection.close();
    });