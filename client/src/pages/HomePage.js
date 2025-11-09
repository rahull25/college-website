// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import EventIcon from '@mui/icons-material/Event';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ComputerIcon from '@mui/icons-material/Computer';
import BiotechIcon from '@mui/icons-material/Biotech';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const departments = [
    { icon: <ComputerIcon sx={{ fontSize: 40 }} />, name: "Computer Science & Engineering" },
    { icon: <EngineeringIcon sx={{ fontSize: 40 }} />, name: "Mechanical Engineering" },
    { icon: <BiotechIcon sx={{ fontSize: 40 }} />, name: "Electronics & Communication" },
    { icon: <ArchitectureIcon sx={{ fontSize: 40 }} />, name: "Civil Engineering" }
  ];

  const slides = [
    {
      image: "/images/campus1.jpg",
      title: "D. Y. Patil College Campus",
      description: "State-of-the-art facilities for engineering excellence"
    },
    {
      image: "/images/campus2.jpg",
      title: "",
      description: ""
    },
    {
      image: "/images/campus3.jpg",
      title: "",
      description: ""
    },
    {
      image: "/images/campus4.jpg",
      title: "",
      description: ""
    },
    {
      image: "/images/campus5.jpg",
      title: "",
      description: ""
    },
    {
      image: "/images/campus6.jpg",
      title: "",
      description: ""
    }
  ];

  const news = [
    "📢 Admissions Open for Academic Year 2024-25",
    "🎓 100% Placement Record for 2023 Batch",
    "🏆 DYPCET Ranked Among Top Engineering Colleges",
    "🔬 New Research Center Inauguration Next Month"
  ];

  useEffect(() => {
    // Auto-advance slides
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    // Auto-advance news ticker
    const newsInterval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % news.length);
    }, 3000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(newsInterval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box>
      {/* News Ticker */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 1,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <NewspaperIcon sx={{ mr: 2 }} />
            <Typography
              sx={{
                transition: 'transform 0.5s ease-in-out',
                whiteSpace: 'nowrap',
              }}
            >
              {news[currentNewsIndex]}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Image Slider */}
      <Box sx={{ position: 'relative', height: '600px', overflow: 'hidden' }}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: index === 0 ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.1)',
              }
            }}
          >
            <Container sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              position: 'relative',
              zIndex: 1
            }}>
              {index === 0 ? (
                <>
                  <Typography variant="h2" component="h1" fontWeight="bold" color="white" gutterBottom>
                    {slide.title}
                  </Typography>
                  <Typography variant="h5" component="p" color="white" sx={{ mb: 4 }}>
                    {slide.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button 
                      variant="contained" 
                      color="secondary" 
                      size="large"
                      component={RouterLink}
                      to="/about"
                    >
                      Discover DYPCET
                    </Button>
                    <Button
                      variant="outlined"
                      color="inherit"
                      size="large"
                      component={RouterLink}
                      to="/contact"
                      sx={{ color: 'white', borderColor: 'white' }}
                    >
                      Apply Now
                    </Button>
                  </Box>
                </>
              ) : null}
            </Container>
          </Box>
        ))}
        <Button
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.7)' }
          }}
        >
          <NavigateBeforeIcon />
        </Button>
        <Button
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.7)' }
          }}
        >
          <NavigateNextIcon />
        </Button>
      </Box>

      {/* 2. Key Statistics Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 8, borderTop: '5px solid #1976d2' }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ mb: 6, color: '#1976d2' }}>
            Our Achievements
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ 
                textAlign: 'center', 
                p: 3, 
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-10px)' }
              }}>
                <SchoolIcon sx={{ fontSize: 50, color: '#1976d2', mb: 2 }} />
                <Typography variant="h3" component="div" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  5000+
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'medium' }}>
                  Students Enrolled
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ 
                textAlign: 'center', 
                p: 3, 
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-10px)' }
              }}>
                <EngineeringIcon sx={{ fontSize: 50, color: '#1976d2', mb: 2 }} />
                <Typography variant="h3" component="div" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  200+
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'medium' }}>
                  Expert Faculty
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ 
                textAlign: 'center', 
                p: 3, 
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-10px)' }
              }}>
                <ComputerIcon sx={{ fontSize: 50, color: '#1976d2', mb: 2 }} />
                <Typography variant="h3" component="div" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  25+
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'medium' }}>
                  Research Labs
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ 
                textAlign: 'center', 
                p: 3, 
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-10px)' }
              }}>
                <BiotechIcon sx={{ fontSize: 50, color: '#1976d2', mb: 2 }} />
                <Typography variant="h3" component="div" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  95%
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'medium' }}>
                  Placement Rate
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. Featured Programs Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom textAlign="center" 
            sx={{ mb: 6, color: '#1976d2', position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 100,
                height: 4,
                backgroundColor: '#1976d2'
              }
            }}>
            Our Featured Programs
          </Typography>
          <Grid container spacing={4}>
            {departments.map((dept, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    p: 3,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      bgcolor: '#e3f2fd', 
                      borderRadius: '50%', 
                      p: 2, 
                      mb: 2 
                    }}
                  >
                    {React.cloneElement(dept.icon, { sx: { fontSize: 40, color: '#1976d2' } })}
                  </Box>
                  <CardContent>
                    <Typography 
                      gutterBottom 
                      variant="h6" 
                      component="div" 
                      textAlign="center"
                      sx={{ fontWeight: 'medium', color: '#1976d2' }}
                    >
                      {dept.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      textAlign="center"
                    >
                      4 Years • B.Tech Program
                    </Typography>
                  </CardContent>
                  <Button 
                    variant="outlined" 
                    color="primary"
                    component={RouterLink}
                    to="/academics"
                    sx={{ mt: 'auto' }}
                  >
                    Learn More
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. About Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 8, borderTop: '5px solid #1976d2' }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom textAlign="center" 
            sx={{ 
              mb: 4, 
              color: '#1976d2',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 100,
                height: 4,
                backgroundColor: '#1976d2'
              }
            }}>
            Excellence in Engineering Education
          </Typography>
          <Typography variant="body1" paragraph sx={{ 
            textAlign: 'center', 
            maxWidth: 800, 
            margin: 'auto', 
            mb: 4,
            lineHeight: 1.8,
            fontSize: '1.1rem'
          }}>
            Established in 1984, D. Y. Patil College of Engineering & Technology has been at the forefront of engineering education in India. 
            Our state-of-the-art facilities, experienced faculty, and industry connections provide students with an unparalleled learning experience.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              component={RouterLink}
              to="/about"
              sx={{ 
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontSize: '1.1rem'
              }}
            >
              Discover Our Legacy
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 4. Latest News & Events Section */}
      <Container sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              color: '#1976d2',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: 0,
                width: 80,
                height: 4,
                backgroundColor: '#1976d2'
              }
            }}
          >
            Latest News & Events
          </Typography>
          <Button 
            variant="outlined" 
            color="primary"
            endIcon={<NavigateNextIcon />}
            sx={{ borderRadius: 2 }}
          >
            View All
          </Button>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              height: '100%',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }
            }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="220"
                  image="/images/event1.jpg"
                  alt="Technical Symposium"
                />
                <Box sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  bgcolor: '#1976d2',
                  color: 'white',
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                }}>
                  <Typography variant="subtitle2">Nov 15, 2025</Typography>
                </Box>
              </Box>
              <CardContent>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <EventIcon color="primary" />
                  <Typography variant="subtitle2" color="primary">
                    Upcoming Event
                  </Typography>
                </Box>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'medium' }}>
                  Annual Technical Symposium 2025
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Join us for our flagship technical event featuring workshops, competitions, and industry speakers.
                </Typography>
                <Button 
                  variant="text" 
                  color="primary" 
                  endIcon={<NavigateNextIcon />}
                  sx={{ p: 0 }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              height: '100%',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }
            }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="220"
                  image="/images/campus6.jpg"
                  alt="Research Partnership"
                />
                <Box sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  bgcolor: '#1976d2',
                  color: 'white',
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                }}>
                  <Typography variant="subtitle2">Nov 20, 2025</Typography>
                </Box>
              </Box>
              <CardContent>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <NewspaperIcon color="primary" />
                  <Typography variant="subtitle2" color="primary">
                    News
                  </Typography>
                </Box>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'medium' }}>
                  Industry Partnership Program
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  New research collaboration with leading tech companies to enhance student opportunities.
                </Typography>
                <Button 
                  variant="text" 
                  color="primary" 
                  endIcon={<NavigateNextIcon />}
                  sx={{ p: 0 }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              height: '100%',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }
            }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="220"
                  image="/images/event3.jpg"
                  alt="Campus Life"
                />
                <Box sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  bgcolor: '#1976d2',
                  color: 'white',
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                }}>
                  <Typography variant="subtitle2">Nov 25, 2025</Typography>
                </Box>
              </Box>
              <CardContent>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <NotificationsIcon color="primary" />
                  <Typography variant="subtitle2" color="primary">
                    Announcement
                  </Typography>
                </Box>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'medium' }}>
                  Campus Innovation Hub
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  New innovation center launched to foster student startups and research projects.
                </Typography>
                <Button 
                  variant="text" 
                  color="primary" 
                  endIcon={<NavigateNextIcon />}
                  sx={{ p: 0 }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      
      {/* 5. Quick Links Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 8, borderTop: '5px solid #1976d2' }}>
        <Container>
          <Typography 
            variant="h4" 
            component="h2" 
            textAlign="center"
            sx={{ 
              mb: 6,
              color: '#1976d2',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                backgroundColor: '#1976d2'
              }
            }}
          >
            Quick Links
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <SchoolIcon sx={{ fontSize: 60, color: '#1976d2', mb: 2 }} />
                <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 'medium' }}>
                  Academics
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  Explore our undergraduate and postgraduate programs.
                </Typography>
                <Button 
                  component={RouterLink} 
                  to="/academics" 
                  variant="outlined"
                  color="primary"
                  endIcon={<NavigateNextIcon />}
                  sx={{ borderRadius: 2 }}
                >
                  View Programs
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <EventIcon sx={{ fontSize: 60, color: '#1976d2', mb: 2 }} />
                <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 'medium' }}>
                  Campus Life
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  Discover student activities and campus culture.
                </Typography>
                <Button 
                  component={RouterLink} 
                  to="/campus-life" 
                  variant="outlined"
                  color="primary"
                  endIcon={<NavigateNextIcon />}
                  sx={{ borderRadius: 2 }}
                >
                  Explore More
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <EngineeringIcon sx={{ fontSize: 60, color: '#1976d2', mb: 2 }} />
                <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 'medium' }}>
                  Research
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  Learn about our research initiatives and projects.
                </Typography>
                <Button 
                  component={RouterLink} 
                  to="/research" 
                  variant="outlined"
                  color="primary"
                  endIcon={<NavigateNextIcon />}
                  sx={{ borderRadius: 2 }}
                >
                  View Research
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <BiotechIcon sx={{ fontSize: 60, color: '#1976d2', mb: 2 }} />
                <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 'medium' }}>
                  Placements
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  Check our placement records and opportunities.
                </Typography>
                <Button 
                  component={RouterLink} 
                  to="/placements" 
                  variant="outlined"
                  color="primary"
                  endIcon={<NavigateNextIcon />}
                  sx={{ borderRadius: 2 }}
                >
                  View Details
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;