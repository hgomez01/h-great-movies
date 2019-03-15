var mongoose = require('mongoose');
var schema = mongoose.Schema;

let movieHistory = new schema({
    productId: { type: String, required: true },
    title : { type: String, required: true},
    rentalPrice : { type: Number, required: true},
    salePrice : { type: Number, required: true}
});

module.exports = mongoose.model('movieHistory', movieHistory);
