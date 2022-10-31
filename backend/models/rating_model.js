const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: Number,
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

module.exports = mongoose.model('RatingData', dataSchema)