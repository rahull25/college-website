import axios from 'axios';

// Create an axios instance with a base URL (can be overridden with REACT_APP_API_URL)
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000'
});

export default api;