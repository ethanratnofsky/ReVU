const express = require('express');
const router = express.Router()

const browserObject = require('../web-scrape/browser');
const scraperController = require('../web-scrape/pageController');

// Models
const CommentModel = require('../models/comment_model');
const ComplaintModel = require('../models/complaint_model');
const RatingModel = require('../models/rating_model');
const TimeModel = require('../models/time_model');
const { init } = require('../models/comment_model');

module.exports = router;

/**
 * RATINGS
*/
router.post('/post/createRating', async (req, res) => {
    const data = new RatingModel({
        userId: req.body.userId,
        diningHallId: req.body.diningHallId,
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

router.get('/getAll/foodRatings/:diningHallId', async (req, res) => {
    try{
        const data = await RatingModel
            .find({diningHallId: req.params.diningHallId})
            .and([{type: 'food'}]);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

router.get('/getAll/trafficRatings/:diningHallId', async (req, res) => {
    try {
        const data = await RatingModel
            .find({diningHallId: req.params.diningHallId})
            .and([{type: 'traffic'}]);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

router.patch('/patch/updateRating', async (req, res) => {
    try {
        const filter = structuredClone(req.body);
        delete filter['rating'];
        console.log(filter, req.body);
        const targetRating = await RatingModel.findOneAndUpdate(filter, { 
            rating: req.body.rating
        });
        res.send(targetRating);
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
        diningHallId: req.body.diningHallId,
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

router.get('/getAll/diningComments/:diningHallId', async (req, res) => {
    try{
        const data = await CommentModel
            .find({diningHallId: req.params.diningHallId});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

router.get('/get/commentsById/:userId', async (req, res) => {
    try{
        const data = await CommentModel
            .find({userId: req.params.userId});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
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
        diningHallId: req.body.diningHallId,
        contact: req.body.contact,
        content: req.body.content,
        urgency: req.body.urgency,
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

router.get('/get/complaintsById/:userId', async (req, res) => {
    try{
        const data = await ComplaintModel
            .find({userId: req.params.userId});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

/**
 * DINING HALLS
*/

async function getRatingHelper(req) {
    const foodData = await RatingModel
        .find({diningHallId: req.params.diningHallId});

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

router.get('/getAll/ratings/:diningHallId', async (req, res) => {
    try {
        const data = await getRatingHelper(req);
        res.json(data)
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

/**
 * Web scraper
 */
router.post('/post/times', async (req, res) => {
    const timeScraper = require('../web-scrape/timeScraper');
    let browser;
    let times;
	try{
		browser = await browserObject.startBrowser();
		times = await timeScraper(browser);
        console.log(times)
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
    await browser.close()
    // Pass the browser instance to the scraper controller
    const dining_halls = ['Commons',
                          'E. Bronson Ingram',
                          'Nicholas S. Zeppos',
                          'Rothschild Dining Hall',
                          'Kitchen at Kissam - Gluten Free',
                          'Rand Dining Center'];
    console.log(times)
    times.forEach(async (obj) => {
        console.log(obj)
        if(dining_halls.includes(obj['title'])) {
            try {
                const data = new TimeModel({
                    diningHallId: 1,
                    days: obj['days'],
                    times: obj['times'],
                });
                const dataToSave = await data.save();
                res.status(200).json(dataToSave)
            }
            catch (error) {
                console.log(error)
                res.status(500).json({message: error.message})
            }
        }
    });
});

router.get('/get/timesById/:diningHallId', async (req, res) => {
    try{
        const data = await TimeModel
        .find({diningHallId: req.params.diningHallId});
    res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});
