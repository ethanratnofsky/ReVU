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
    type: {
        required: true,
        type: String,
    },
    rating: {
        required: true,
        type: Number
    },
});

module.exports = mongoose.model('Ratings', dataSchema)