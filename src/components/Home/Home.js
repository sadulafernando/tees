import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

// Image Imports for Section 3
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s4 from '../assets/s4.jpg';
import s5 from '../assets/s5.jpg';
import s6 from '../assets/s6.jpg';
import s7 from '../assets/s7.jpg';
import s8 from '../assets/s8.jpg';
import s9 from '../assets/s9.jpg';
import s10 from '../assets/s10.jpg';
import s11 from '../assets/s11.jpg';
import s12 from '../assets/s12.jpg';
import s13 from '../assets/s13.jpg';
import s14 from '../assets/s14.jpg';
import s15 from '../assets/s15.jpg';
import s16 from '../assets/s16.jpg';

// Image Imports for Section 4
import ss1 from '../assets/ss1.jpg';
import ss2 from '../assets/ss2.jpg';
import ss3 from '../assets/ss3.jpg';
import ss4 from '../assets/ss4.jpg';
import ss5 from '../assets/ss5.jpg';
import ss6 from '../assets/ss6.jpg';
import ss7 from '../assets/ss7.jpg';

// Common Container
const PageContainer = styled(Box)({
  maxWidth: '1440px',
  width: '100%',
  margin: '0 auto',
  padding: { xs: '0 15px', sm: '0 20px' },
});

// Hero Section
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '90vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#000000',
  textAlign: 'center',
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(30, 30, 30, 0.3))',
  },
  [theme.breakpoints.down('sm')]: {
    height: '80vh',
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: { xs: '2.5rem', sm: '4rem', md: '5rem' },
  fontWeight: 800,
  letterSpacing: '2px',
  none: 'sentence case',
  color: '#000000',
  background: '#ffffff',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  zIndex: 1,
  marginBottom: '20px',
  fontFamily: "'Playfair Display', serif",
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
  fontWeight: 400,
  lineHeight: '1.7',
  color: '#ffffff',
  maxWidth: '800px',
  zIndex: 1,
  marginBottom: '30px',
  fontFamily: "'Roboto', sans-serif",
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    maxWidth: '90%',
  },
}));

// Business Intro Section
const BusinessIntroSection = styled(Box)(({ theme }) => ({
  padding: '80px 0',
  background: 'linear-gradient(180deg, #ffffff, #f0f0f0)',
  color: '#000000',
  textAlign: 'center',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '20vh',
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent)',
    zIndex: 0,
  },
  [theme.breakpoints.down('sm')]: {
    padding: '60px 0',
    minHeight: '10vh',
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: { xs: '0.9rem', sm: '1rem' },
  fontWeight: 500,
  letterSpacing: '2px',
  none: 'sentence case',
  color: '#000000',
  marginBottom: '10px',
  zIndex: 1,
  fontFamily: "'Roboto', sans-serif",
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: { xs: '5rem', sm: '6.4rem', md: '7.2rem' },
  fontWeight: 700,
  letterSpacing: '1px',
  color: '#000000',
  fontFamily: "'Playfair Display', serif",
  marginBottom: '30px',
  zIndex: 1,
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '60px',
    height: '2px',
    background: 'linear-gradient(90deg, #000000, #333333)',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.2rem',
  },
}));

const IntroButton = styled(Button)(({ theme }) => ({
  border: '1px solid #000000',
  color: '#000000',
  padding: '8px 24px',
  fontSize: '0.8rem',
  fontWeight: 500,
  borderRadius: '25px',
  none: 'sentence case',
  margin: '0 10px',
  background: 'linear-gradient(45deg, #ffffff, #f0f0f0)',
  transition: 'all 0.3s ease',
  zIndex: 1,
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    background: 'linear-gradient(45deg, #000000, #333333)',
    color: '#ffffff',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    transform: 'translateY(-2px)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '6px 16px',
    fontSize: '0.7rem',
    margin: '0 5px',
  },
}));

// Section 3: New Arrivals Slider
const NewArrivalsSection = styled(Box)(({ theme }) => ({
  padding: '80px 0',
  background: '#000000',
  color: '#ffffff',
  textAlign: 'center',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: '60px 0',
  },
}));

const Card = styled(Box)(({ theme }) => ({
  width: '300px',
  height: '400px',
  borderRadius: '15px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 25px rgba(255, 255, 255, 0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '250px',
    height: '350px',
  },
}));

const CardImage = styled(Box)({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

// Section 4: Featured Collection Slider
const FeaturedCollectionSection = styled(Box)(({ theme }) => ({
  padding: '80px 0',
  background: '#ffffff',
  color: '#000000',
  textAlign: 'center',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: '60px 0',
  },
}));

const FeaturedCard = styled(Box)(({ theme }) => ({
  width: '300px',
  height: '400px',
  borderRadius: '15px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 25px rgba(0, 0, 0, 0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '250px',
    height: '350px',
  },
}));

const FeaturedCardImage = styled(Box)({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const sliderAnimationLeft = {
  animate: {
    x: ['0%', '-100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 100,
        ease: 'linear',
      },
    },
  },
};

const sliderAnimationRight = {
  animate: {
    x: ['-100%', '0%'], 
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 48,
        ease: 'linear',
      },
    },
  },
};

// New Arrivals Data (Section 3)
const newArrivals = [
  { image: s1 },
  { image: s2 },
  { image: s3 },
  { image: s4 },
  { image: s5 },
  { image: s6 },
  { image: s7 },
  { image: s8 },
  { image: s9 },
  { image: s10 },
  { image: s11 },
  { image: s12 },
  { image: s13 },
  { image: s14 },
  { image: s15 },
  { image: s16 },
];

// Featured Collection Data (Section 4)
const featuredCollection = [
  { image: ss1 },
  { image: ss2 },
  { image: ss3 },
  { image: ss4 },
  { image: ss5 },
  { image: ss6 },
  { image: ss7 },
];

const Home = () => {
  return (
    <Box sx={{ backgroundColor: '#000000' }}>
      {/* Section 1: Hero */}
      <PageContainer>
        <HeroSection
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <HeroTitle variant="h1" component={motion.div} variants={fadeInUp}>
            Premium Oversized Tees
          </HeroTitle>
          <HeroSubtitle variant="h5" component={motion.div} variants={fadeInUp}>
            Discover the ultimate blend of comfort and style with Baa M Boo’s exclusive collection of oversized tees for men and women. Crafted with premium materials for a perfect fit that lasts.
          </HeroSubtitle>
        </HeroSection>
      </PageContainer>

      {/* Section 2: Business Intro */}
      <PageContainer>
        <BusinessIntroSection
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <Subtitle component={motion.div} variants={fadeInUp}>
            Baa M Boo Since 2025
          </Subtitle>
          <MainTitle component={motion.div} variants={fadeInUp}>
            The World of Luxury <br />Explore seasonal collections, iconic accessories, and more
          </MainTitle>
          <Box
            component={motion.div}
            variants={fadeInUp}
            sx={{ display: 'flex', gap: { xs: '10px', sm: '20px' }, flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <IntroButton href="#shop">Shop Now</IntroButton>
            <IntroButton href="#explore">Explore Our Journey</IntroButton>
          </Box>
        </BusinessIntroSection>
      </PageContainer>

      {/* Section 3: New Arrivals Slider */}
      <PageContainer>
        <NewArrivalsSection
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <Subtitle component={motion.div} variants={fadeInUp} sx={{ color: '#ffffff', fontSize: '2rem' }}>
            New Arrivals
          </Subtitle>
          <MainTitle component={motion.div} variants={fadeInUp} sx={{ color: '#ffffff', fontSize: '1.7rem' }}>
            Premium Style for Every Moment
          </MainTitle>
          <motion.div
            variants={sliderAnimationLeft}
            animate="animate"
            style={{ display: 'flex', gap: '20px', width: 'max-content' }}
          >
            {newArrivals.concat(newArrivals).map((item, index) => (
              <Card key={index}>
                <CardImage style={{ backgroundImage: `url(${item.image})` }} />
              </Card>
            ))}
          </motion.div>
        </NewArrivalsSection>
      </PageContainer>

      {/* Section 4: Featured Collection Slider */}
      <PageContainer>
        <FeaturedCollectionSection
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <Subtitle component={motion.div} variants={fadeInUp} sx={{ color: '#000000', fontSize: '2rem' }}>
            Featured Collection
          </Subtitle>
          <MainTitle component={motion.div} variants={fadeInUp} sx={{ color: '#000000', fontSize: '1.7rem' }}>
            Timeless Pieces, Modern Comfort
          </MainTitle>
          <motion.div
            variants={sliderAnimationRight}
            animate="animate"
            style={{ display: 'flex', gap: '20px', width: 'max-content' }}
          >
            {featuredCollection.concat(featuredCollection).map((item, index) => (
              <FeaturedCard key={index}>
                <FeaturedCardImage style={{ backgroundImage: `url(${item.image})` }} />
              </FeaturedCard>
            ))}
          </motion.div>
        </FeaturedCollectionSection>
      </PageContainer>
    </Box>
  );
};

export default Home;