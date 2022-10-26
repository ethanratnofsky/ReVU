const express = require('express');
const router = express.Router()

// Models
const CommentModel = require('../models/comment_model');
const ComplaintModel = require('../models/complaint_model');
const RatingModel = require('../models/rating_model');

module.exports = router;

/**
 * RATINGS
 */
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

router.patch('/patch/updateRating', async (req, res) => {
    try {
        const result = await RatingModel
            .find(req.params.userId)
            .findByIdAndUpdate(req.params.ratingId,
                               req.params.rating,
                               {new: true});
        res.send(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.delete('/delete/allRatings', async (req, res) => {
    try {
        const data = await RatingModel
            .find()
            .deleteMany();
        res.send('All ratings have been deleted');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


/**
 * COMMENTS
*/
router.post('/post/createComment', async (req, res) => {
    const data = new CommentModel({
        userId: req.body.userId,
        diningHall: req.body.diningHall,
        content: req.body.content,
        timestamp: Date.now()
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
});

router.get('/getAll/diningComments/:diningHall', async (req, res) => {
    try{
        const data = await CommentModel
            .find({diningHall: req.params.diningHall});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

router.patch('/patch/updateComment', async (req, res) => {
    try {
        const result = await CommentModel
            .find(req.params.userId)
            .findByIdAndUpdate(req.params.commentId,
                               req.params.newContent,
                               {new: true});
        
        res.send(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.delete('/delete/delComment', async (req, res) => {
    try {
        const data = await CommentModel
            .find({userId: req.params.userId})
            .deleteOne({commentId: req.params.commentId});
        res.send('The comment has been deleted');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


/**
 * COMPLAINTS
 */
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
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});


/**
 * DINING HALLS
*/

async function getRatingHelper(req) {
    const foodData = await RatingModel
        .find({diningHall: req.params.diningHall});

    finFood = 0.0;
    finTraffic = 0.0
    numFood = 0;
    numTraffic = 0;

    foodData.forEach(element => {
        if(element.type == 'food') {
            finFood += element.rating;
            numFood += 1;
        } else {
            finTraffic += element.rating;
            numTraffic += 1;
        }
    });
    
    if(numFood) {
        finFood /= numFood;
    }
    if(numTraffic) {
        finTraffic /= numTraffic;
    }

    data = {finFood, finTraffic};
    return data;
}

router.get('/getAll/ratings/:diningHall', async (req, res) => {
    try {
        const data = await getRatingHelper(req);
        res.json(data)
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.patch('/patch/getNewRating', async (req, res) => {
    try {
        const result = await getRatingHelper(req)
            .find(req.params.userId)
            .findByIdAndUpdate(req.params.commentId,
                               req.params.newContent,
                               {new: true});
        res.send(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});