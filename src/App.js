import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import WellcomePage from './components/Wellcomepage/WellcomePage';
import MensPage from './components/MensPage/MensPage';


function App() {
  return (
    <Router>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<WellcomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/men" element={<MensPage />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;