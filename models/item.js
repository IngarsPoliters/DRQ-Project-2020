const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String
    },
    desc: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now 
    }
})

module.exports = Item = mongoose.model('item', ItemSchema);