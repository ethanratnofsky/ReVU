const express = require('express');
const router = express.Router()

// Models
const CommentModel = require('../models/comment_model');
const ComplaintModel = require('../models/complaint_model');
const RatingModel = require('../models/rating_model');

module.exports = router;

// Ratings
router.post('/post/newRating', async (req, res) => {
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

router.get('/getAll/userRatings/:userId', async (req, res) => {
    try{
        const data = await RatingModel
            .find({userId: req.params.userId});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

router.get('/getAll/foodRatings/:diningHall', async (req, res) => {
    try{
        const data = await RatingModel
            .find({diningHall: req.params.diningHall})
            .and([{type: 'food'}]);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

router.get('/getAll/trafficRatings/:diningHall', async (req, res) => {
    try {
        const data = await RatingModel
            .find({diningHall: req.params.diningHall})
            .and([{type: 'traffic'}]);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

router.put('/put/updateRating', async (req, res) => {
    try {
        const result = await RatingModel
            .find(req.params.userId)
            .findByIdAndUpdate(req.params.ratingId,
                               req.params.rating,
                               {new: true});
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.delete('/delete/allRatings', async (req, res) => {
    const data = await RatingModel
        .find();
    res.send('All ratings have been deleted');
})

// Complaints
router.post('/post/newComplaint', async (req, res) => {
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

router.get('/getAll/complaints', async (req, res) => {
    try{
        const data = await ComplaintModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});