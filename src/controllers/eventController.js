const Event = require("../models/Event");

// Create Event
exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create({ ...req.body, createdBy: req.user.id });
    res.status(201).json({ message: "Event created successfully", event });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get Events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json({ events });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Event Controller (eventController.js)
// Update Event by ID
exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, date, location } = req.body;

    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { name, description, date, location },
      { new: true } // Return the updated event
    );

    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.status(200).json({
      message: "Event updated successfully",
      event: updatedEvent,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Event Controller (eventController.js)
exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params; // Event ID

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.status(200).json({
      message: "Event deleted successfully",
      event: deletedEvent,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const { id } = req.params; // Event ID

    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.status(200).json({
      message: "Event fetched successfully",
      event,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

