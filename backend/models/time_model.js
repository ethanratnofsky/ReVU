const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    diningHallId: {
        required: true,
        type: String,
    },
    days: {
        required: true,
        type: [String],
    },
    times: {
        required: true,
        type: [String],
    },
});

module.exports = mongoose.model('Times', dataSchema)