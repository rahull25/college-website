// server/models/Faculty.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FacultySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  qualification: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    default: 'default-profile-pic-url.jpg' // A placeholder
  },
  // This links a faculty member to their department
  department: {
    type: Schema.Types.ObjectId,
    ref: 'Department', // Connects to the 'Department' model
    required: true
  }
});

module.exports = mongoose.model('Faculty', FacultySchema);