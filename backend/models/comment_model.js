const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: String
    },
    diningHallId: {
        requied: true,
        type: Number,
    },
    content: {
        required: true,
        type: String,
    },
    timestamp: {
        required: true,
        type: Number
    },
});

module.exports = mongoose.model('Comments', dataSchema);