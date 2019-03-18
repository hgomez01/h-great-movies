/* Retrieving dependencies */
import mongoose from "mongoose";

/* Building script to seed the database */
const runMigration = mongoose.connection.on('open', function (ref) {

    // Retrieving the list of collections for the current database
    mongoose.connection.db.listCollections().toArray(function (err, names) {

        console.log(names);
        console.info(names.length > 0);
        // Checking if there's already any collections
        if(names.length > 0) {
            console.log("Database is not empty: Seeds are not going to be run");
        } else {
            console.log("Seeding database....");

            /* Running migration for Movies */
            let moviesSeed = require("./seeds/movies");
            let moviesSch = require("./../models/movie");
            moviesSch.insertMany(moviesSeed.module, (err, res) => { printMigrationResults(moviesSch, err, res) });

            // Running migration for Users
            let usersSeed = require("./seeds/users");
            let usersSch = require("./../models/user");
            usersSch.insertMany(usersSeed.module, (err, res) => { printMigrationResults(usersSch, err, res) });

            // Running migration for Movies History
            let moviesHistorySeed = require("./seeds/movieHistory");
            let moviesHistorySch = require("./../models/movieHistory");
            moviesHistorySch.insertMany(moviesHistorySeed.module, (err, res) => { printMigrationResults(moviesHistorySch, err, res) });

            // Running migration for Popularities
            let popularitySeed = require("./seeds/popularity");
            let popularitySch = require("./../models/populatiry");
            popularitySch.insertMany(popularitySeed.module, (err, res) => { printMigrationResults(popularitySch, err, res) });

            /* TODO -----> Add seeds files */
/***
            // Running migration for Invoice
            let invoiceSeed = require("./seeds/invoice");
            let invoiceSch = require("./../models/invoice");
            invoiceSch.insertMany(invoiceSeed.module, (err, res) => { printMigrationResults(invoiceSch, err, res) });

            // Running migration for InvoiceDetails
            let invoiceDetailSeed = require("./seeds/invoiceDetails");
            let invoiceDetailSch = require("./../models/invoiceDetails");
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

exports.module = runMigration;
