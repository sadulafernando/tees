import React from 'react';
import { Box, Typography, Link, Grid, Divider, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import baaMbooLogo from '../assets/mainlogo1.png'; // Your logo

const PageContainer = styled(Box)({
  maxWidth: '1440px',
  width: '100%',
  margin: '0 auto',
  padding: { xs: '0 15px', sm: '0 20px' },
});

const StyledFooter = styled(Box)({
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: '40px 0',
  bottom: 0,
  position: 'relative',
});

const FooterLink = styled(Link)({
  color: '#d3d3d3',
  textDecoration: 'none',
  fontSize: '0.75rem', // Smaller font size
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#28b463',
  },
});

const FooterSectionTitle = styled(Typography)({
  color: '#ffffff',
  fontWeight: 'bold',
  marginBottom: '15px',
  fontSize: '0.9rem', // Smaller font size for section titles
});

const NewsletterInput = styled(TextField)({
  '& .MuiInputBase-root': {
    backgroundColor: '#ffffff',
    borderRadius: '0px',
    padding: '5px',
  },
  '& .MuiInputBase-input': {
    color: '#000000',
    fontSize: '0.75rem', // Smaller font size
    padding: '5px',
  },
});

const SubscribeButton = styled(Button)({
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: '5px 15px',
  fontSize: '0.75rem', // Smaller font size
  border: '1px solid #ffffff',
  borderRadius: '0px',
  transition: 'backgroundColor 0.3s ease, transform 0.2s ease',
  '&:hover': {
    backgroundColor: '#28b463',
    borderColor: '#28b463',
  },
});

const LogoImage = styled('img')({
  height: '40px',
  width: '200px',
  marginBottom: '20px',
});

const Footer = () => {
  return (
    <StyledFooter component="footer">
      <PageContainer>
        <Grid container spacing={3} justifyContent="space-between">
          {/* Logo in the top left corner */}
          <Grid item xs={12}>
            <LogoImage src={baaMbooLogo} alt="Baa M Boo Logo" />
          </Grid>

          {/* Footer Sections */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterSectionTitle variant="h6">Customer Service</FooterSectionTitle>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <FooterLink href="#my-account">My Account</FooterLink>
              <FooterLink href="#live-chat">Live Chat</FooterLink>
              <FooterLink href="#customer-support">Customer Support</FooterLink>
              <FooterLink href="#shipping-delivery">Shipping & Delivery</FooterLink>
              <FooterLink href="#returns-exchanges">Returns & Exchanges Policy</FooterLink>
              <FooterLink href="#start-return">Start a Free Return or Exchange</FooterLink>
              <FooterLink href="#check-order-status">Check Order Status</FooterLink>
              <FooterLink href="#gift-cards">Gift Cards</FooterLink>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <FooterSectionTitle variant="h6">Company</FooterSectionTitle>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <FooterLink href="#about-us">About Us</FooterLink>
              <FooterLink href="#careers">Careers</FooterLink>
              <FooterLink href="#world-of-baamboo">World of Baa M Boo</FooterLink>
              <FooterLink href="#protecting-brands">Protecting Our Brands</FooterLink>
              <FooterLink href="#global-citizenship">Global Citizenship & Sustainability</FooterLink>
              <FooterLink href="#commitment-equity">Commitment to Racial Equity</FooterLink>
              <FooterLink href="#satisfaction-guarantee">Satisfaction Guarantee</FooterLink>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <FooterSectionTitle variant="h6">Sign Up For Emails</FooterSectionTitle>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                <NewsletterInput
                  variant="outlined"
                  placeholder="Enter Email Address"
                  size="small"
                  fullWidth
                />
                <SubscribeButton type="submit">Submit</SubscribeButton>
              </Box>
              <Typography variant="caption" sx={{ color: '#d3d3d3', fontSize: '0.65rem' }}>
                Click{' '}
                <FooterLink href="#privacy-notice">here</FooterLink>{' '}
                to read Baa M Boo's privacy notice. Or contact{' '}
                <FooterLink href="#contact-us">us</FooterLink>.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Divider and Bottom Links */}
        <Divider sx={{ my: 3, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mb: 1 }}>
            <FooterLink href="#company-info">Company Information</FooterLink>
            <Typography variant="caption" sx={{ color: '#d3d3d3' }}>|</Typography>
            <FooterLink href="#terms-of-use">Terms of Use</FooterLink>
            <Typography variant="caption" sx={{ color: '#d3d3d3' }}>|</Typography>
            <FooterLink href="#privacy-notice">Privacy Notice</FooterLink>
            <Typography variant="caption" sx={{ color: '#d3d3d3' }}>|</Typography>
            <FooterLink href="#california-privacy">California Privacy Notice at Collection</FooterLink>
            <Typography variant="caption" sx={{ color: '#d3d3d3' }}>|</Typography>
            <FooterLink href="#transparency-act">UK and California Transparency Act</FooterLink>
            <Typography variant="caption" sx={{ color: '#d3d3d3' }}>|</Typography>
            <FooterLink href="#do-not-sell">Do Not Sell My Personal Information</FooterLink>
            <Typography variant="caption" sx={{ color: '#d3d3d3' }}>|</Typography>
            <FooterLink href="#accessibility">Accessibility Statement</FooterLink>
          </Box>
          <Typography variant="caption" sx={{ color: '#d3d3d3', fontSize: '0.65rem' }}>
            © Copyright 2025 Baa M Boo Media LLC
          </Typography>
        </Box>
      </PageContainer>
    </StyledFooter>
  );
};

export default Footer;