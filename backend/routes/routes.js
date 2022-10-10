const express = require('express');
const router = express.Router()

// Models
const CommentModel = require('../models/comment_model');
const ComplaintModel = require('../models/complaint_model');

module.exports = router;

/*
router.post('/post', async (req, res) => {
    const data = new CommentModel({
        rating: req.body.rating,
        message: req.body.message
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch(error) {
        res.status(400).json({message: error.message});

    }
});
*/

router.post('/post', async (req, res) => {
    const data = new ComplaintModel({
        message: req.body.message
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})