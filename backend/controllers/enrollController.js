const Enrollment = require('../models/Enrollment');

exports.createApplication = async (req, res) => {
  try {
    // req.user.id comes from the 'protect' middleware we discussed earlier
    const enrollmentData = {
      ...req.body,
      user: req.user.id, 
      programName: req.body.initiative // Mapping your form's 'initiative' to DB 'programName'
    };

    const application = await Enrollment.create(enrollmentData);
    
    res.status(201).json({
      success: true,
      data: application
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};