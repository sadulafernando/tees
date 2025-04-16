import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from '../assets/home.jpg';
import { useNavigate } from 'react-router-dom';

// Styled Box for the full-screen hero section
const HeroSection = styled(Box)({
  height: '100vh',
  width: '100vw',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#ffffff',
  textAlign: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 10,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
});

// Styled Button
const StyledButton = styled(Button)({
  backgroundColor: '#ffffff',
  color: '#000000',
  padding: '12px 40px',
  fontSize: '20px',
  fontWeight: 'bold',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#cccccc',
  },
  zIndex: 2,
});

const WellcomePage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/home');
  };

  return (
    <HeroSection>
      <Typography variant="h2" sx={{ zIndex: 2, fontWeight: 'bold', marginBottom: '20px' }}>
        Welcome to Baa M Boo
      </Typography>
      <Typography variant="h5" sx={{ zIndex: 2, marginBottom: '40px' }}>
        Premium Oversized Tees for Men & Women
      </Typography>
      <StyledButton variant="contained" onClick={handleStart}>
        Let&apos;s Start
      </StyledButton>
    </HeroSection>
  );
};

export default WellcomePage;
