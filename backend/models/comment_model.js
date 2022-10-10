const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: Number
    },
    diningHall: {
        requied: true,
        type: String,
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

module.exports = mongoose.model('CommentData', dataSchema);