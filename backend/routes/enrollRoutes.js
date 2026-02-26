const express = require('express');
const router = express.Router();
const { createApplication, getApplications } = require('../controllers/enrollController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');

// Route to submit an application (Any logged-in user)
router.post('/', protect, createApplication);

// Route for Admin to view all applications
router.get('/admin/all', protect, adminOnly, getApplications);

module.exports = router;