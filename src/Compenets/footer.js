import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.main',
        color: 'white',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © 2025 Anime Search App. All Rights Reserved.
      </Typography>
      <Box>
        <Link href="/" color="inherit" sx={{ margin: '0 1rem' }}>
          Home
        </Link>
        <Link href="/subscribe" color="inherit" sx={{ margin: '0 1rem' }}>
          Subscribe
        </Link>
        
      </Box>
    </Box>
  );
};

export default Footer;
