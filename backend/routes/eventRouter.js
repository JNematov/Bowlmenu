const express = require("express");
const eventRouter = express.Router();
const {
  getEvents,
  postEvent,
  putEvent,
  deleteEvent,
} = require("../controllers/eventControllers");

eventRouter.route("/events").get(getEvents);
// eventRouter.route('/events').post(postEvent)
// eventRouter.route('/events/:id').put(putEvent).delete(deleteEvent)

module.exports = eventRouter;
