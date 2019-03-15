import * as mongoose from 'mongoose';
var schema = mongoose.Schema;

let popularity = new schema({
    movieId : { type: String, required: true },
    userId    : { type: String, required: true },
    likedDate : { type: Date, required: true, default : Date.now() },
    status    : { type: String, enum: ['Liked','Unliked'], default : 'Liked'}
});

module.exports = mongoose.model('popularity', popularity);
