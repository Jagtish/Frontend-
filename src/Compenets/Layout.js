import React from 'react';
import Header from './Header';
import Footer from './footer';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box flex="1">{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
