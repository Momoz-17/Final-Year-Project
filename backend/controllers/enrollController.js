const Enrollment = require('../models/Enrollment');

exports.createApplication = async (req, res) => {
  try {
    // We map the React form data to our MongoDB model
    const application = await Enrollment.create({
      ...req.body,
      user: req.user.id, // Comes from 'protect' middleware
      programName: req.body.initiative // Maps 'initiative' from React to DB
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Admin Route to view applications
exports.getApplications = async (req, res) => {
  try {
    const applications = await Enrollment.find().populate('user', 'name email');
    res.status(200).json({ success: true, data: applications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};