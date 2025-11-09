// src/pages/AcademicsPage.js
import React from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import BiotechIcon from '@mui/icons-material/Biotech';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function AcademicsPage() {
  const departments = [
    {
      id: 1,
      name: "Computer Science & Engineering",
      icon: <ComputerIcon sx={{ fontSize: 40 }} />,
      description: "Cutting-edge curriculum covering software development, artificial intelligence, data science, and more.",
      courses: [
        "B.Tech in Computer Science & Engineering",
        "M.Tech in Computer Science & Engineering",
        "PhD in Computer Science"
      ],
      facilities: [
        "Advanced Computing Lab",
        "AI & Machine Learning Lab",
        "Software Development Center",
        "IoT Laboratory"
      ]
    },
    {
      id: 2,
      name: "Mechanical Engineering",
      icon: <EngineeringIcon sx={{ fontSize: 40 }} />,
      description: "Comprehensive program focusing on design, manufacturing, and industrial automation.",
      courses: [
        "B.Tech in Mechanical Engineering",
        "M.Tech in Manufacturing Engineering",
        "PhD in Mechanical Engineering"
      ],
      facilities: [
        "CAD/CAM Laboratory",
        "Robotics Lab",
        "Material Testing Lab",
        "Thermal Engineering Lab"
      ]
    },
    {
      id: 3,
      name: "Civil Engineering",
      icon: <ArchitectureIcon sx={{ fontSize: 40 }} />,
      description: "Expert training in structural engineering, construction management, and sustainable development.",
      courses: [
        "B.Tech in Civil Engineering",
        "M.Tech in Structural Engineering",
        "PhD in Civil Engineering"
      ],
      facilities: [
        "Structural Engineering Lab",
        "Environmental Engineering Lab",
        "Surveying Lab",
        "Construction Material Testing Lab"
      ]
    },
    {
      id: 4,
      name: "Electronics & Communication",
      icon: <BiotechIcon sx={{ fontSize: 40 }} />,
      description: "Advanced studies in communication systems, embedded systems, and signal processing.",
      courses: [
        "B.Tech in Electronics & Communication",
        "M.Tech in Communication Systems",
        "PhD in Electronics"
      ],
      facilities: [
        "Digital Signal Processing Lab",
        "Microprocessor Lab",
        "Communication Systems Lab",
        "VLSI Design Lab"
      ]
    }
  ];

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
            Academics
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 800 }}>
            Discover Our Comprehensive Academic Programs
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* Overview Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom color="primary">
            Academic Excellence
          </Typography>
          <Typography variant="body1" paragraph>
            At D. Y. Patil College of Engineering & Technology, we offer a wide range of undergraduate,
            postgraduate, and doctoral programs across various engineering disciplines. Our curriculum
            is designed to meet industry standards and is regularly updated to incorporate the latest
            technological advancements.
          </Typography>
        </Box>

        {/* Departments Section */}
        <Typography variant="h4" component="h2" gutterBottom color="primary" sx={{ mb: 4 }}>
          Our Departments
        </Typography>
        
        {departments.map((dept) => (
          <Accordion key={dept.id} sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ 
                '&.Mui-expanded': {
                  backgroundColor: 'primary.light',
                  color: 'white'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {dept.icon}
                <Typography variant="h6">{dept.name}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="body1" paragraph>
                    {dept.description}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
                    <Typography variant="h6" gutterBottom color="primary">
                      Programs Offered
                    </Typography>
                    <List>
                      {dept.courses.map((course, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <SchoolIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={course} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
                    <Typography variant="h6" gutterBottom color="primary">
                      Laboratory Facilities
                    </Typography>
                    <List>
                      {dept.facilities.map((facility, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={facility} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}

        {/* Additional Academic Features */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom color="primary">
            Academic Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Industry Collaboration
                  </Typography>
                  <Typography variant="body2">
                    Regular industry visits, expert lectures, and internship opportunities
                    with leading companies in the field.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Research Opportunities
                  </Typography>
                  <Typography variant="body2">
                    State-of-the-art research facilities and collaboration opportunities
                    with national and international institutions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Student Development
                  </Typography>
                  <Typography variant="body2">
                    Comprehensive personality development programs, technical workshops,
                    and skill enhancement courses.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default AcademicsPage;