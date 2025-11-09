// src/pages/ContactPage.js
import React, { useState } from 'react';
import api from '../api';
import { 
  Container, 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Alert,
  Grid,
  Paper,
  IconButton
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: 'Submitting...', type: 'info' });

    try {
      // use the shared axios instance; endpoint path is relative to baseURL
      const response = await api.post('/api/enquiry', formData);
      setStatus({ message: response.data.msg || 'Message sent successfully!', type: 'success' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting message:', error);
      setStatus({ message: 'Error sending message. Please try again.', type: 'error' });
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
          position: 'relative',
          backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 800 }}>
            Get in Touch with D. Y. Patil College of Engineering and Technology
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom color="primary">
                Contact Information
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                  <Typography variant="body1">
                    Kasaba Bawada, Kolhapur,<br />
                    Maharashtra - 416006
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon color="primary" sx={{ mr: 2 }} />
                  <Typography variant="body1">
                    +91 231 2601433
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon color="primary" sx={{ mr: 2 }} />
                  <Typography variant="body1">
                    info@dypcet.ac.in
                  </Typography>
                </Box>
              </Box>

              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box sx={{ mt: 2 }}>
                <IconButton color="primary" href="https://facebook.com" target="_blank">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="primary" href="https://twitter.com" target="_blank">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="primary" href="https://linkedin.com" target="_blank">
                  <LinkedInIcon />
                </IconButton>
                <IconButton color="primary" href="https://instagram.com" target="_blank">
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom color="primary">
                Send us a Message
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Have questions about admissions or our programs? We're here to help.
              </Typography>

              {status.message && (
                <Alert 
                  severity={status.type} 
                  sx={{ mb: 3 }}
                  onClose={() => setStatus({ message: '', type: '' })}
                >
                  {status.message}
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={4}
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Box sx={{ mt: 6, mb: 8 }}>
          <Typography variant="h5" gutterBottom color="primary">
            Find Us On Map
          </Typography>
          <Paper elevation={3} sx={{ height: '400px', width: '100%' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.453391806079!2d74.2308333!3d16.7050000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000000000000%3A0x0!2sD.Y.+Patil+College+of+Engineering+and+Technology!5e0!3m2!1sen!2sin!4v1636531424548!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DYPCET Location"
            />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactPage;