// Event Routes (eventRoutes.js)
const express = require("express");
const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
  getEventById
} = require("../controllers/eventController");
const authenticate = require("../middleware/authMiddleware");
const router = express.Router();

// Create Event
router.post("/", authenticate, createEvent);

// Get All Events
router.get("/", getEvents);

// Edit Event
router.put("/:id", authenticate, updateEvent);

// Delete Event
router.delete("/:id", authenticate, deleteEvent);


router.get("/:id", authenticate, getEventById);

module.exports = router;
