const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logSchema = new Schema({
    log: { type: String, required: true },
    image: { data: Buffer, contentType: String, required: false},
    start: { type: String, required: true},
    end: { type: String, required: true},
    date: { type: Date, default: Date.now, required: true},
    volts: { type: Number, required: false},
    amps: { type: Number, required: false},
    pressure: { type: Number, required: false},
    ohms: { type: Number, required: false},
    returned: {type: Boolean, default: false, required: true }
}, { timestamps: true});

module.exports = mongoose.model("Log", logSchema)