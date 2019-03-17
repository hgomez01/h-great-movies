/* Retrieving dependencies */
import mongoose from "mongoose";

/* Building script to seed the database */
const runMigration = mongoose.connection.on('open', function (ref) {

    // Retrieving the list of collections for the current database
    mongoose.connection.db.listCollections().toArray(function (err, names) {

        // Checking if there's already any collections
        if(names.length > 0) {
            console.log("Database is not empty: Seeds are not going to be run");
        } else {
            /* Running migration for Movies */
            let moviesSeed = require("./seeds/movies");
            let moviesSch = require("./../models/movie");
            moviesSch.insertMany(moviesSeed.module, (err, res) => { printMigrationResults(moviesSch, err, res) });

            /* TODO -----> Add seeds files */
/***
            // Running migration for Movies History
            let moviesHistorySeed = require("./seeds/movies");
            let moviesHistorySch = require("./../models/movieHistory");
            moviesHistorySch.insertMany(moviesHistorySeed.module, (err, res) => { printMigrationResults(moviesHistorySch, err, res) });

            // Running migration for Popularities
            let popularitySeed = require("./seeds/movies");
            let popularitySch = require("./../models/movie");
            popularitySch.insertMany(popularitySeed.module, (err, res) => { printMigrationResults(popularitySch, err, res) });

            // Running migration for Users
            let usersSeed = require("./seeds/movies");
            let usersSch = require("./../models/movie");
            usersSch.insertMany(usersSeed.module, (err, res) => { printMigrationResults(usersSch, err, res) });

            // Running migration for Invoice
            let invoiceSeed = require("./seeds/movies");
            let invoiceSch = require("./../models/movie");
            invoiceSch.insertMany(invoiceSeed.module, (err, res) => { printMigrationResults(invoiceSch, err, res) });

            // Running migration for InvoiceDetails
            let invoiceDetailSeed = require("./seeds/movies");
            let invoiceDetailSch = require("./../models/movie");
            invoiceDetailSch.insertMany(invoiceDetailSeed.module, (err, res) => { printMigrationResults(invoiceDetailSch, err, res) });
***/
        }
    });
});

let printMigrationResults = (dbSchema, error, results) => {
    if (error) {
        console.log(`An error occurred seeding the ${dbSchema.collection.collectionName} collection: ${error}`);
    } else if (results.length > 0) {
        console.log(`Collection ${dbSchema.collection.collectionName} has been imported successfully`)
    }
}
/*
let cleanDB = mongoose.connection.db.dropDatabase((error, result) => {
    if (error)
        console.error("Error dropping the database: " + error);
    else
        console.log("DB has been dropped. " + result);
});
*/
exports.module = runMigration;
