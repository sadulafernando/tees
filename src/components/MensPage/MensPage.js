import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Pagination } from '@mui/material';
import { styled } from '@mui/system';

// Import the images
import s1s from '../assets/s1.jpg';
import s2s from '../assets/s2.jpg';
import s3s from '../assets/s3.jpg';
import s4s from '../assets/s4.jpg';
import s5s from '../assets/s5.jpg';
import s6s from '../assets/s6.jpg';
import s7s from '../assets/s7.jpg';
import s8s from '../assets/s8.jpg';
import s9s from '../assets/s9.jpg';

// Sample data with imported images
const mensClothingItems = [
  {
    name: 'Baa M Boo - Over Size Tees',
    brand: 'Baa M Boo',
    price: 'LKR 5000.00',
    image: s1s,
  },
  {
    name: 'Baa M Boo - Over Size Tees',
    brand: 'Baa M Boo',
    price: 'LKR 5000.00',
    image: s2s,
  },
  {
    name: 'Baa M Boo - Over Size Tees',
    brand: 'Baa M Boo',
    price: 'LKR 5000.00',
    image: s3s,
  },
  {
    name: 'Baa M Boo - Over Size Tees',
    brand: 'Baa M Boo',
    price: 'LKR 5000.00',
    image: s4s,
  },
  {
    name: 'Baa M Boo - Over Size Tees',
    brand: 'Baa M Boo',
    price: 'LKR 5000.00',
    image: s5s,
  },
  {
    name: 'Baa M Boo - Over Size Tees',
    brand: 'Baa M Boo',
    price: 'LKR 5000.00',
    image: s6s,
  },
  {
    name: 'Baa M Boo - Over Size Tees',
    brand: 'Baa M Boo',
    price: 'LKR 5000.00',
    image: s7s,
  },
  {
    name: 'Baa M Boo - Over Size Tees',
    brand: 'Baa M Boo',
    price: 'LKR 5000.00',
    image: s8s,
  },
  {
    name: 'Baa M Boo - Over Size Tees',
    brand: 'Baa M Boo',
    price: 'LKR 5000.00',
    image: s9s,
  },
];

// Styled components for the layout
const CategoryButton = styled(Button)({
  color: '#000',
  padding: '8px 16px',
  fontSize: '0.9rem',
  textTransform: 'none',
  borderRadius: '20px',
  margin: '0 5px',
  backgroundColor: '#f0f0f0',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
});

const ItemImage = styled('img')({
  width: '100%',
  height: '400px',
  objectFit: 'cover',
  borderRadius: '8px',
});

const MensPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate the total number of pages
  const totalPages = Math.ceil(mensClothingItems.length / itemsPerPage);

  // Get the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = mensClothingItems.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={{ padding: '20px', maxWidth: '1440px', margin: '0 auto' }}>
      {/* Page Header */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Men's Clothing
      </Typography>
      
      {/* Clothing Items Grid */}
      <Grid container spacing={3}>
        {currentItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <ItemImage src={item.image} alt={item.name} />
              <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {item.brand}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '5px' }}>
                <Typography variant="body2" sx={{ textDecoration: item.discountedPrice ? 'line-through' : 'none', color: item.discountedPrice ? 'textSecondary' : 'textPrimary' }}>
                  {item.price}
                </Typography>
                {item.discountedPrice && (
                  <Typography variant="body2" sx={{ color: 'red' }}>
                    {item.discountedPrice}
                  </Typography>
                )}
              </Box>
              {item.colors && (
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: '5px' }}>
                  {item.colors} colors available
                </Typography>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="#ffffff"
        />
      </Box>
    </Box>
  );
};

export default MensPage;