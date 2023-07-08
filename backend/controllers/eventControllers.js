const Event = require('../models/eventModel')

const getEvents = async (req, res) => {
    const events = await Event.find();
    res.status(200).json(events)
}

const postEvent = async (req, res) => {
    const event = await Event.create({
        title: req.body.title,
        description: req.body.description,
        source: req.body.source,
        time: req.body.time
    })
    res.status(200).json(event)
}

module.exports = {getEvents, postEvent}