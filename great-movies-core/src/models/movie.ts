import * as mongoose from 'mongoose';
var schema = mongoose.Schema;

let movie = new schema({
    title : { type: String, required: true},
    description : { type: String, required: true},
    coverUrl : { type: String, required: true},
    stock : { type: Number, required: true},
    rentalPrice : { type: Number, required: true},
    salePrice : { type: Number, required: true},
    availability: { type: String, enum: ['Available','Unavailable'], default: 'Active' },
    status: { type: String, enum: ['Active','Deleted'], default: 'Active' }
});

module.exports = mongoose.model('movie', movie);
