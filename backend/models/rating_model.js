const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: Number,
    },
    diningHall: {
        required: true,
        type: String
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