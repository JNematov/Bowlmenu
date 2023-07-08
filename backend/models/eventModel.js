const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    title: {
        type: String
    },
    source: {
        type: String
    },
    description:{
        type: String,
    }, 
    time: {
        type: String, 
    }
})

module.exports = mongoose.model('Event', eventSchema)