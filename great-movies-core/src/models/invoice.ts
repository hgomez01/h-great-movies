import * as mongoose from 'mongoose';

var schema = mongoose.Schema;

let invoice = new schema({
    createdDate: { type: Date, required : true, default: Date.now() },
    clientId: { type: String, required: true },
    total: { type: Number, required: true },
    transType: { type: String, enum: ['rental','sell'], required: true },
    estimatedReturnDate: { type: Date },
    returnedDate: { type: Date },
    penality: { type: Number }
});

module.exports = mongoose.model('invoice', invoice);
