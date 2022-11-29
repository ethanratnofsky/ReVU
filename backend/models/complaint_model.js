const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: String,
    },
    diningHallId: {
        required: true,
        type: Number
    },
    contact: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String,
    },
    urgency: {
        required: true,
        type: Number,
    },
    timestamp: {
        required: true,
        type: Number
    },
});

module.exports = mongoose.model('Complaints', dataSchema)