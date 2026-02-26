const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

// Get all enrollments for the Admin Page
router.get('/enrollments', async (req, res) => {
  try {
    const enrollments = await Enrollment.find().populate('user', 'name email');
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;