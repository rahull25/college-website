// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AcademicsPage from './pages/AcademicsPage';
import FacultyPage from './pages/FacultyPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#103d74',
      light: '#1756a3',
      dark: '#0c2c54',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#103d74',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#103d74',
      secondary: '#4a4a4a',
    },
  },
  typography: {
    h1: {
      color: '#103d74',
    },
    h2: {
      color: '#103d74',
    },
    h3: {
      color: '#103d74',
    },
    h4: {
      color: '#103d74',
    },
    h5: {
      color: '#103d74',
    },
    h6: {
      color: '#103d74',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#103d74',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#0c2c54',
          },
        },
        outlined: {
          borderColor: '#103d74',
          color: '#103d74',
          '&:hover': {
            borderColor: '#0c2c54',
            backgroundColor: 'rgba(16, 61, 116, 0.04)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#103d74',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <Navbar />
      
      {/* Main content area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} /> {/* <-- 2. ADD ROUTE */}
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Box>
      
      <Footer />
    </Box>
    </ThemeProvider>
  );
}

export default App;