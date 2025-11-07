// server/routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// @route   POST api/events
// @desc    Create a new event
router.post('/', async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    const event = await newEvent.save();
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/events
// @desc    Get all events
router.get('/', async (req, res) => {
  try {
    // Sort by date, newest first
    const events = await Event.find().sort({ date: -1 });
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;