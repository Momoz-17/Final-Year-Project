const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // This must match the name used in mongoose.model('User', ...)
    required: true
  },
  programName: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, { 
  timestamps: true // This automatically creates 'createdAt' and 'updatedAt' fields
});

module.exports = mongoose.model('Enrollment', EnrollmentSchema);