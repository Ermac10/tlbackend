const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    log: { type: String, required: true },
    image: { data: Buffer, conentType: String, required: false},
    start: { tyoe: String, required: true},
    end: { type: String, required: true},
    date: { type: Date, default: Date.now, required: true},
    volts: { type: Number, required: false},
    amps: { type: Number, required: false},
    pressure: { type: Number, required: false},
    ohms: { type: Number, required: false},
    returned: {type: Boolean, default: true, required: false }
}, { timestamps: true});

module.exports = mongoose.model("Log", logSchema)