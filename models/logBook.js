const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    component: { type: String, required: false },
    log: { type: String, required: false },
    turbine: {type: String, required: false},
    // image: { data: Buffer, contentType: String, required: false},
    start: { type: String, required: false},
    end: { type: String, required: false},
    volts: { type: String, required: false},
    amps: { type: String, required: false},
    pressure: { type: String, required: false},
    ohms: { type: String, required: false},
    // returned: {type: Boolean, default: false, required: false }
}, { timestamps: true});

module.exports = mongoose.model("Log", logSchema)