const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    message: {
        requied: true,
        type: String,
    }
});

module.exports = mongoose.model('ComplaintData', dataSchema)