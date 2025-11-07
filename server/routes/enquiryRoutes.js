// server/routes/enquiryRoutes.js
const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

// @route   POST api/enquiry
// @desc    Submit a new enquiry
router.post('/', async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    const enquiry = await newEnquiry.save();
    // Send a success message back
    res.json({ msg: 'Enquiry submitted successfully!', enquiry });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;