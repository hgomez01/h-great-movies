import mongoose from "mongoose";

let schema = mongoose.Schema;

let testModel01 = new schema({
    name     : { type: String, required: true },
    email    : { type: String, unique :true, required: true},
    description:{ type: String, required: false}
});

module.exports = mongoose.model('test01', testModel01);