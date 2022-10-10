const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    rating: {
        required: true,
        type: Number
    },
    message: {
        requied: false,
        type: String,
    }
})

module.exports = mongoose.model('Data', dataSchema)