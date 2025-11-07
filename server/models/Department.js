// server/models/Department.js
const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true // Removes whitespace
  },
  description: {
    type: String,
    required: true
  },
  headOfDepartment: {
    type: String,
    required: true
  },
  intake: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Department', DepartmentSchema);