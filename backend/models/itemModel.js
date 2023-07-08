const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    options: {
        type: Array
    }
})

module.exports = mongoose.model('Item', itemSchema)