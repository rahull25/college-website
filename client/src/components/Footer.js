// src/components/Footer.js
import React from 'react';
import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Contact', path: '/contact' }
  ];

  const departments = [
    'Computer Science & Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electronics & Communication'
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.main',
        color: 'white'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* College Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              D. Y. Patil College of Engineering and Technology
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                Kasaba Bawada, Kolhapur, Maharashtra - 416006
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                +91 231 2601433
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                info@dypcet.ac.in
              </Typography>
            </Box>
            {/* Social Media Icons */}
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com" target="_blank">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com" target="_blank">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                component={RouterLink}
                to={link.path}
                color="inherit"
                sx={{ 
                  display: 'block', 
                  mb: 1,
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </Grid>

          {/* Departments */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Departments
            </Typography>
            {departments.map((dept) => (
              <Typography
                key={dept}
                variant="body2"
                sx={{ mb: 1 }}
              >
                {dept}
              </Typography>
            ))}
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ mt: 4, borderTop: 1, borderColor: 'rgba(255, 255, 255, 0.1)', pt: 2 }}>
          <Typography variant="body2" align="center">
            {'Copyright © '}
            <Link 
              color="inherit" 
              component={RouterLink} 
              to="/"
              sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
            >
              D. Y. Patil College of Engineering and Technology
            </Link>{' '}
            {new Date().getFullYear()}. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;