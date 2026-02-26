const express = require('express');
const router = express.Router();
const { createApplication } = require('../controllers/enrollController');
const { protect } = require('../middlewares/authMiddleware');

// Only logged-in users (protect) can submit applications
router.post('/', protect, createApplication);

module.exports = router;