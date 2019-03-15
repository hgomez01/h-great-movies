import * as mongoose from 'mongoose';
var schema = mongoose.Schema;

let invoiceDetail = new schema({
    invoiceId: { type: String, required: true },
    productId: { type: String, required: true },
    amount: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
});

module.exports = mongoose.model('invoiceDetail', invoiceDetail);
