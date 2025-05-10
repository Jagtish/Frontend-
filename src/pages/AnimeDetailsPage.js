import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';


// Import local images
import NarutoImg from '../assets/Nurrutto.jpeg';
import OnePieceImg from '../assets/download.jpeg';

// Styled Components for custom design
const Container = styled(Box)(({ theme }) => ({
  padding: '2rem',
  maxWidth: '1000px',
  margin: 'auto',
  backgroundColor: theme.palette.background.default,
}));

const Image = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '12px',
});

const AnimeDetailsPage = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const localImages = {
    'Naruto': NarutoImg,
    'One Piece': OnePieceImg,
  };

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const json = await res.json();
        setAnime(json.data);
      } catch (err) {
        setError('Failed to load anime details.');
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeDetails();
  }, [id]);

  if (loading) return <Container><CircularProgress /></Container>;
  if (error) return <Container><Typography color="error">{error}</Typography></Container>;
  if (!anime) return null;

  return (
    <Container>
      <Card sx={{ display: 'flex', boxShadow: 3, borderRadius: 2 }}>
        <Grid container spacing={3} padding={2}>
          {/* Image Section */}
          <Grid item xs={12} md={4}>
            <Image
              src={localImages[anime.title] || anime.images.jpg.large_image_url}
              alt={anime.title}
              style={{ borderRadius: '12px' }}
            />
          </Grid>

          {/* Anime Details Section */}
          <Grid item xs={12} md={8}>
            <CardContent>
              <Typography variant="h4" color="primary" gutterBottom>
                {anime.title}
              </Typography>

              <Typography variant="h6" color="textSecondary" gutterBottom>
                <strong>Status:</strong> {anime.status}
              </Typography>

              <Typography variant="body1" paragraph>
                {anime.synopsis || 'No synopsis available.'}
              </Typography>

              <Typography variant="body2">
                <strong>Episodes:</strong> {anime.episodes}
              </Typography>
              <Typography variant="body2">
                <strong>Genres:</strong> {anime.genres.map(g => g.name).join(', ')}
              </Typography>

              {/* Action Button */}
              <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                Watch Now
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default AnimeDetailsPage;


