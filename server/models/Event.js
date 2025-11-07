// server/models/Event.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    required: true
  },
  imageUrl: {
    type: String
  }
});

module.exports = mongoose.model('Event', EventSchema);