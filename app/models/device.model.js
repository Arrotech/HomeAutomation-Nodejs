const mongoose = require('mongoose');

const DeviceSchema = mongoose.Schema({
    name: String,
    category: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Device', DeviceSchema);
