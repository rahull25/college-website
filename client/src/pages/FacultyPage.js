// src/pages/FacultyPage.js
import React from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Avatar,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';

function FacultyPage() {
  const [selectedDepartment, setSelectedDepartment] = React.useState(0);

  const handleDepartmentChange = (event, newValue) => {
    setSelectedDepartment(newValue);
  };

  const departments = [
    'All Departments',
    'Computer Science',
    'Mechanical',
    'Civil',
    'Electronics'
  ];

  const faculty = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      position: "Professor & Head",
      department: "Computer Science",
      qualification: "PhD in Computer Science",
      experience: "20+ years",
      specialization: "Artificial Intelligence & Machine Learning",
      email: "rajesh.kumar@dypcet.ac.in",
      image: "",
      achievements: [
        "Published 50+ research papers",
        "IEEE Senior Member",
        "Best Teacher Award 2024"
      ]
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      position: "Associate Professor",
      department: "Computer Science",
      qualification: "PhD in Data Science",
      experience: "15+ years",
      specialization: "Big Data Analytics",
      email: "priya.sharma@dypcet.ac.in",
      image: "",
      achievements: [
        "Best Research Paper Award 2023",
        "5 Patents Filed",
        "Industry Collaboration Projects"
      ]
    },
    {
      id: 3,
      name: "Dr. Sanjay Patel",
      position: "Professor",
      department: "Mechanical",
      qualification: "PhD in Mechanical Engineering",
      experience: "18+ years",
      specialization: "Robotics & Automation",
      email: "sanjay.patel@dypcet.ac.in",
      image: "",
      achievements: [
        "Industrial Robotics Project Lead",
        "Published 30+ papers",
        "International Collaborations"
      ]
    }
  ];

  const filteredFaculty = selectedDepartment === 0 
    ? faculty 
    : faculty.filter(f => f.department === departments[selectedDepartment]);

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
            Our Faculty
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 800 }}>
            Meet Our Distinguished Academic Team
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* Department Tabs */}
        <Paper sx={{ mb: 4 }}>
          <Tabs
            value={selectedDepartment}
            onChange={handleDepartmentChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            {departments.map((dept, index) => (
              <Tab key={index} label={dept} />
            ))}
          </Tabs>
        </Paper>

        {/* Faculty Grid */}
        <Grid container spacing={4}>
          {filteredFaculty.map((member) => (
            <Grid item key={member.id} xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      src={member.image}
                      sx={{ width: 120, height: 120, mb: 2 }}
                    />
                    <Typography variant="h6" align="center">
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" align="center">
                      {member.position}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      {member.department}
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <SchoolIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Qualification"
                        secondary={member.qualification}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <WorkIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Experience"
                        secondary={member.experience}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <StarIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Specialization"
                        secondary={member.specialization}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <EmailIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Contact"
                        secondary={member.email}
                      />
                    </ListItem>
                  </List>

                  <Divider sx={{ my: 2 }} />

                  <Typography variant="subtitle2" gutterBottom>
                    Key Achievements:
                  </Typography>
                  <List dense>
                    {member.achievements.map((achievement, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <StarIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={achievement}
                          primaryTypographyProps={{ variant: 'body2' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default FacultyPage;