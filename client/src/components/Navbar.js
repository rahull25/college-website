import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container,
  Menu,
  MenuItem,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [academicsAnchor, setAcademicsAnchor] = useState(null);
  const [aboutAnchor, setAboutAnchor] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAcademicsOpen = (event) => {
    setAcademicsAnchor(event.currentTarget);
  };

  const handleAcademicsClose = () => {
    setAcademicsAnchor(null);
  };

  const handleAboutOpen = (event) => {
    setAboutAnchor(event.currentTarget);
  };

  const handleAboutClose = () => {
    setAboutAnchor(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: 'none' }}>
      {/* Top Info Bar */}
      <Box sx={{ bgcolor: '#103d74', color: 'white', py: 1 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">+91 231 2601433</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" />
                <Typography variant="body2">info@dypcet.ac.in</Typography>
              </Box>
            </Box>
            <Button 
              variant="outlined" 
              color="inherit" 
              size="small"
              component={RouterLink}
              to="/contact"
              sx={{ borderRadius: 4 }}
            >
              Admission Enquiry
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Logo Bar */}
      <Container maxWidth="lg">
  <Box
    sx={{
      py: 1.5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', // 🔹 Center everything horizontally
      position: 'relative',
    }}
  >
    {/* College Name in Center */}
    <Box
      component={RouterLink}
      to="/"
      sx={{
        textDecoration: 'none',
        textAlign: 'center', // 🔹 Center text inside
        color: 'inherit',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          color: '#0f2b5b',
          letterSpacing: 0.5,
        }}
      >
        D. Y. Patil College of Engineering
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ color: '#777', fontWeight: 500 }}
      >
        and Technology, Kolhapur
      </Typography>
    </Box>

    {/* Mobile Menu Icon — stays at right edge */}
    {isMobile && (
      <IconButton
        color="primary"
        onClick={handleMenuOpen}
        sx={{
          position: 'absolute',
          right: 0, // 🔹 Keep it on the right edge
        }}
      >
        <MenuIcon />
      </IconButton>
    )}
  </Box>
</Container>


      {/* Navigation Bar */}
      <Box sx={{ bgcolor: 'primary.main', display: { xs: 'none', md: 'block' } }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'center', gap: 2 }}>
            <Button color="inherit" component={RouterLink} to="/">
              Home
            </Button>
            <Button
              color="inherit"
              onClick={handleAboutOpen}
              endIcon={<KeyboardArrowDownIcon />}
            >
              About
            </Button>
            <Button
              color="inherit"
              onClick={handleAcademicsOpen}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Academics
            </Button>
            <Button color="inherit" component={RouterLink} to="/faculty">
              Faculty
            </Button>
            <Button color="inherit" component={RouterLink} to="/contact">
              Contact
            </Button>
          </Toolbar>
        </Container>
      </Box>

      {/* Mobile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem component={RouterLink} to="/" onClick={handleMenuClose}>
          Home
        </MenuItem>
        <MenuItem component={RouterLink} to="/about" onClick={handleMenuClose}>
          About
        </MenuItem>
        <MenuItem component={RouterLink} to="/academics" onClick={handleMenuClose}>
          Academics
        </MenuItem>
        <MenuItem component={RouterLink} to="/faculty" onClick={handleMenuClose}>
          Faculty
        </MenuItem>
        <MenuItem component={RouterLink} to="/contact" onClick={handleMenuClose}>
          Contact
        </MenuItem>
      </Menu>

      {/* Academics Dropdown */}
      <Menu
        anchorEl={academicsAnchor}
        open={Boolean(academicsAnchor)}
        onClose={handleAcademicsClose}
      >
        <MenuItem onClick={handleAcademicsClose}>Computer Science & Engineering</MenuItem>
        <MenuItem onClick={handleAcademicsClose}>Mechanical Engineering</MenuItem>
        <MenuItem onClick={handleAcademicsClose}>Civil Engineering</MenuItem>
        <MenuItem onClick={handleAcademicsClose}>Electronics & Communication</MenuItem>
      </Menu>

      {/* About Dropdown */}
      <Menu
        anchorEl={aboutAnchor}
        open={Boolean(aboutAnchor)}
        onClose={handleAboutClose}
      >
        <MenuItem component={RouterLink} to="/about" onClick={handleAboutClose}>Overview</MenuItem>
        <MenuItem onClick={handleAboutClose}>Vision & Mission</MenuItem>
        <MenuItem onClick={handleAboutClose}>Infrastructure</MenuItem>
        <MenuItem onClick={handleAboutClose}>Achievements</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;