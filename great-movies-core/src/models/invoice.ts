import * as mongoose from 'mongoose';

var schema = mongoose.Schema;

let invoice = new schema({
    createdDate: { type: Date, required : true, default: Date.now() },
    clientId: { type: String, required: true },
    total: { type: Number, required: true },
    transType: { type: String, enum: ['Rental','Sell'], required: true },
    returnDate: { type: Date },
    penality: { type: Number }
});

module.exports = mongoose.model('invoice', invoice);
