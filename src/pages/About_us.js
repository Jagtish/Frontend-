import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box
} from '@mui/material';

const teamMembers = [
  {
    name: 'Alice',
    role: 'Frontend Developer',
    image: '/Assets/OIP.jpeg',
  },
  {
    name: 'Bob',
    role: 'Backend Developer',
    image: '/Assets/th.jpeg',
  },
  {
    name: 'Charlie',
    role: 'UI/UX Designer',
    image: '/Assets/James.jpeg',
  },
];

const AboutUsPage = () => (
  <Container sx={{ padding: '2rem' }}>
    <Typography variant="h3" gutterBottom>About Us</Typography>
    <Typography>
    A few years ago, we started a small t-shirt printing business. Business was good, but spreadsheets don't scale well. Pretty soon tracking and managing everything in spreadsheets became an unbearable hell of looking for the right file, the right sheet, the right cell.

None of the available software helped us — each tool more complicated, expensive, incompatible, or with user interfaces from '95. There had to be something better.

That's when we started YoPrint. We wanted to bring forth the much-needed innovations using engineering techniques staple to big tech companies. We obsessively evaluate every aspect of print shop management to create intuitive and power tools without restricting your freedom. It's not an easy feat but one that we work on relentlessly.

Meet The Team
    </Typography>
    <Typography variant="body1" paragraph>
      This app helps you explore anime titles with ease, powered by the Jikan API.
    </Typography>

    <Box mt={4}>
      <Typography variant="h4" gutterBottom>Meet the Team</Typography>
      <Grid container spacing={3}>
        {teamMembers.map((member, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ textAlign: 'center', py: 3 }}>
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
              />
              <CardContent>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

export default AboutUsPage;

