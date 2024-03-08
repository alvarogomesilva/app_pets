const { Schema } = require("mongoose");

const schema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    weight: { type: String, required: true },
    color: { type: String, required: true },
    images: { type: Array, required: true },
    status: { type: Boolean },
    user: Object,
    adopter: Object
},
{
    timestamps: true
})

module.exports = schema