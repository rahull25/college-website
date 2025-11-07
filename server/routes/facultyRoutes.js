// server/routes/facultyRoutes.js
const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty');

// @route   POST api/faculty
// @desc    Create a new faculty member
router.post('/', async (req, res) => {
  try {
    const newFaculty = new Faculty(req.body);
    const faculty = await newFaculty.save();
    res.json(faculty);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/faculty
// @desc    Get all faculty members
router.get('/', async (req, res) => {
  try {
    // We use .populate() to fetch the department info, not just its ID
    const faculty = await Faculty.find().populate('department', 'name');
    res.json(faculty);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;