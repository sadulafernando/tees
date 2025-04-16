import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import baaMbooLogo from '../assets/mainlogo1.png';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#000000', // Black background
  boxShadow: '0 1px 0 rgba(255, 255, 255, 0.1)', // Subtle bottom border with a light white tint
});

const StyledButton = styled(Button)({
  color: '#ffffff', // White text to contrast with black background
  padding: '8px 12px', // Reduced padding for tighter spacing
  fontWeight: 100,
  fontSize: '0.7rem', // Smaller font size
  textTransform: 'none', // No uppercase, respecting manual capitalization
  '&:hover': {
    color: '#28b463', // Keep your green hover color
    backgroundColor: 'transparent',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '0',
    height: '1px',
    bottom: '0',
    left: '50%',
    backgroundColor: '#28b463',
    transition: 'width 0.3s ease, left 0.3s ease',
  },
  '&:hover:after': {
    width: '100%',
    left: '0',
  },
});

const IconButton = styled(Button)({
  color: '#ffffff',
  padding: '8px',
  minWidth: 'auto',
  '&:hover': {
    color: '#28b463',
    backgroundColor: 'transparent',
  },
});

const LogoImage = styled('img')({
  height: '40px',
  width: '200px',
  cursor: 'pointer',
});

const PageContainer = styled(Box)({
  maxWidth: '1440px',
  width: '100%',
  margin: '0 auto',
  padding: { xs: '0 15px', sm: '0 20px' },
});

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <PageContainer>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', minHeight: '60px' }}>
          {/* Logo on the left */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <LogoImage src={baaMbooLogo} alt="Baa M Boo Logo" />
            </Link>
          </Box>

          {/* Navigation Links centered */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <StyledButton component={Link} to="/men">
              Men
            </StyledButton>
            <StyledButton component={Link} to="/women">
              Women
            </StyledButton>
            <StyledButton component={Link} to="/home">
              Home
            </StyledButton>
            <StyledButton component={Link} to="/gifts">
              Gifts
            </StyledButton>
          </Box>

          {/* Icons on the right */}
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <IconButton component={Link} to="/search">
              <SearchIcon sx={{ fontSize: '20px' }} />
            </IconButton>
            <IconButton component={Link} to="/account">
              <PersonOutlineIcon sx={{ fontSize: '20px' }} />
            </IconButton>
            <IconButton component={Link} to="/wishlist">
              <FavoriteBorderIcon sx={{ fontSize: '20px' }} />
            </IconButton>
            <IconButton component={Link} to="/cart">
              <ShoppingBagOutlinedIcon sx={{ fontSize: '20px' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </PageContainer>
    </StyledAppBar>
  );
};

export default Navbar;