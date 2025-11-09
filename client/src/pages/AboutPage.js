// src/pages/AboutPage.js
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Divider, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function AboutPage() {
  const achievements = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#103d74' }} />,
      title: "NAAC 'A' Grade",
      description: "Accredited with 'A' grade by National Assessment and Accreditation Council"
    },
    {
      icon: <AutoStoriesIcon sx={{ fontSize: 40, color: '#103d74' }} />,
      title: "NBA Accredited",
      description: "Multiple programs accredited by the National Board of Accreditation"
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: '#103d74' }} />,
      title: "Industry Connections",
      description: "Strong partnerships with over 50+ leading companies"
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#103d74' }} />,
      title: "Research Excellence",
      description: "Recognized research center with multiple patents and publications"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: '#103d74',
          color: 'white',
          py: 8,
          mb: 6,
          position: 'relative',
          backgroundImage: 'url("/images/campus1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
            About DYPCET
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 800, color: 'white' }}>
            Shaping Tomorrow's Leaders in Engineering and Technology
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* History Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#103d74' }}>
            Our Legacy of Excellence
          </Typography>
          <Typography variant="body1" paragraph>
            Founded in 1984, D. Y. Patil College of Engineering & Technology, Kolhapur, 
            has established itself as a premier institution for engineering education in Maharashtra. 
            As part of the prestigious D. Y. Patil Group, we have consistently maintained high 
            standards in academic excellence, research initiatives, and industry collaboration.
          </Typography>
          <Typography variant="body1" paragraph>
            Over the past four decades, we have produced thousands of successful engineers who 
            are now working in leading organizations worldwide. Our commitment to quality education 
            and continuous improvement has earned us numerous accolades and recognition from various 
            national and international bodies.
          </Typography>
        </Box>

        {/* Vision & Mission */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%', '&:hover': { boxShadow: '0 8px 24px rgba(16, 61, 116, 0.15)' } }}>
              <Typography variant="h5" component="h2" sx={{ color: '#103d74' }} gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1" paragraph>
                To be a globally recognized center of excellence in technical education, 
                research, and innovation, producing socially responsible professionals 
                who can address global challenges and contribute to the advancement of society.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%', '&:hover': { boxShadow: '0 8px 24px rgba(16, 61, 116, 0.15)' } }}>
              <Typography variant="h5" component="h2" sx={{ color: '#103d74' }} gutterBottom>
                Our Mission
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography variant="body1" component="li" paragraph>
                  To provide world-class technical education through innovative teaching methods and state-of-the-art facilities
                </Typography>
                <Typography variant="body1" component="li" paragraph>
                  To promote research, innovation, and entrepreneurship among students and faculty
                </Typography>
                <Typography variant="body1" component="li" paragraph>
                  To develop ethical leaders with strong professional and social values
                </Typography>
                <Typography variant="body1" component="li" paragraph>
                  To establish and maintain strong industry-academia partnerships
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Achievements Section */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#103d74', mb: 4 }}>
          Our Achievements
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ 
                height: '100%', 
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 24px rgba(16, 61, 116, 0.15)'
                }
              }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {achievement.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {achievement.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {achievement.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Infrastructure Highlights */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#103d74' }}>
            Infrastructure Highlights
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ color: '#103d74' }}>
                Modern Laboratories
              </Typography>
              <Typography variant="body2" paragraph>
                State-of-the-art labs equipped with the latest technology and equipment
                for practical learning and research.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ color: '#103d74' }}>
                Digital Library
              </Typography>
              <Typography variant="body2" paragraph>
                Extensive collection of e-books, journals, and research papers with
                24/7 online access for students and faculty.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ color: '#103d74' }}>
                Sports Facilities
              </Typography>
              <Typography variant="body2" paragraph>
                Multiple sports grounds, indoor games facilities, and a well-equipped
                gymnasium for student recreation and fitness.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutPage;