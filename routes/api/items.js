const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/item')

// @route   GET api.items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})

// @route   POST api.items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        location: req.body.location,
        imgSrc: req.body.imgSrc
    });
    newItem.save()
        .then(item => res.json(item));
})

// @route   Delete api.items/:id
// @desc    Delete An Item
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(error => res.status(404).json({ success: false }))
})

// @route   Get api.items/:id
// @desc    Get An Item By ID
// @access  Public   
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    //callback function, return item of this id
    Item.findById(req.params.id, (err,data) => {
        res.json(data);
    })
})

// @route   Update api.items/:id
// @desc    Edit An Item
// @access  Public
router.post('/:id', (req,res) => {
    console.log("Update Item: "+ req.params.id);
    //Find the Item and update with the item Id, updates the existing item with new item information
    Item.findByIdAndUpdate(req.params.id, req.body, {new: true},)
        .then(item => res.json(item))
        .catch(error => console.log(error))
        })
       // res.status(404).json({success: false})

module.exports = router;