import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


const Container = styled(Box)(({ theme }) => ({
  padding: '2rem',
  maxWidth: '600px',
  margin: 'auto',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
}));

const SubscribePage = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Here, you can add your subscription logic (e.g., send the email to a backend)
    setSubscribed(true);
  };

  return (
    <Container>
      <Typography variant="h4" color="primary" gutterBottom>
        Subscribe for Updates
      </Typography>
      {subscribed ? (
        <Typography variant="body1" color="green">
          Thank you for subscribing! You will receive updates.
        </Typography>
      ) : (
        <>
          <TextField
            label="Enter your email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '1rem' }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubscribe}
            disabled={!email}
          >
            Subscribe
          </Button>
        </>
      )}
    </Container>
  );
};

export default SubscribePage;
