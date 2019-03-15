import * as mongoose from 'mongoose';
var schema = mongoose.Schema;

let user = new schema({
    name     : { type: String, required: true },
    email    : { type: String, unique :true, required: true, lowercase : true},
    password : { type: String, required: true },
    role     : { type: String, enum: ['Admin','General'], default: 'General' },
    status   : { type: String, enum: ['Enabled','Disabled'], default: 'Enabled' }
});

module.exports = mongoose.model('user', user);
