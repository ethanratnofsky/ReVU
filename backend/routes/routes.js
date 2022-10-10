const express = require('express');
const router = express.Router()

// Models
const CommentModel = require('../models/comment_model');
const ComplaintModel = require('../models/complaint_model');
const RatingModel = require('../models/rating_model');

module.exports = router;

// Ratings
router.post('/post', async (req, res) => {
    const data = new RatingModel({
        userId: req.body.userId,
        diningHall: req.body.diningHall,
        type: req.body.type,
        rating: req.body.rating
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
});

router.get('/getAll/:userId', async (req, res) => {
    try{
        const data = await RatingModel.findById(req.params.userId);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

router.get('/getAll/:diningHall', async (req, res) => {
    try{
        const data = await RatingModel.findById(req.params.userId).find({type: 'food'});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});



// Complaints
router.post('/post', async (req, res) => {
    const data = new ComplaintModel({
        userId: req.body.userId,
        contact: req.body.contact,
        content: req.body.content,
        timestamp: Date.now(),
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
});

router.get('/getAll', async (req, res) => {
    try{
        const data = await ComplaintModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});