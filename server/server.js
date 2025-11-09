// server.js
require('dotenv').config(); // Load variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const clientURL = process.env.CLIENT_URL || '*'; // allow all by default (safe for dev)
app.use(cors({
  origin: clientURL,
}));
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// A simple test route
app.get('/', (req, res) => {
  res.send('Hello from the DYPCET API Server!');
});

// --- API Routes ---
app.use('/api/departments', require('./routes/departmentRoutes'));
app.use('/api/faculty', require('./routes/facultyRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/enquiry', require('./routes/enquiryRoutes'));

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
