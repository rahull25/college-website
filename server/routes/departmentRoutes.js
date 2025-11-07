// server/routes/departmentRoutes.js
const express = require('express');
const router = express.Router();
const Department = require('../models/Department'); // Import the model

// @route   POST api/departments
// @desc    Create a new department
router.post('/', async (req, res) => {
  try {
    // Get the data from the request body
    const { name, description, headOfDepartment, intake } = req.body;

    const newDepartment = new Department({
      name,
      description,
      headOfDepartment,
      intake
    });

    const department = await newDepartment.save(); // Save to database
    res.json(department); // Send the new department back as a response

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/departments
// @desc    Get all departments
router.get('/', async (req, res) => {
  try {
    const departments = await Department.find(); // Get all from database
    res.json(departments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;