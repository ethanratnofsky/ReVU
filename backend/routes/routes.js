const Model = require('../models/model');
const express = require('express');
const router = express.Router()

module.exports = router;

/**
//Post Method
router.post('/post', (req, res) => {
    res.send('Post API')
})

//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

*/

router.post('/post', async (req, res) => {
    const data = new Model({
        rating: req.body.rating,
        message: req.body.message,
        time: req.body.time,
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch(error) {
        res.status(400).json({message: error.message});

    }
});