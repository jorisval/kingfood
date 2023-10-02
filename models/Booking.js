const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    email: {type: String, required: true},
    numberPerson: {type: String, required: true},
    time: {type: String, required: true},
    message: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Booking', bookingSchema);