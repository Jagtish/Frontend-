import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  TextField,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Pagination,
  CircularProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

// Styled container
const Container = styled(Box)({
  padding: '2rem',
  maxWidth: '1200px',
  margin: 'auto',
});

const AnimeCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.03)',
  },
});

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [animeList, setAnimeList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Debounce logic
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const fetchAnime = async (searchTerm, pageNum = 1) => {
    if (!searchTerm) {
      setAnimeList([]);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${searchTerm}&page=${pageNum}`);
      const data = await res.json();
      setAnimeList(data.data || []);
      setPageCount(data.pagination?.last_visible_page || 1);
      setError('');
    } catch (err) {
      setError('Failed to fetch anime.');
    } finally {
      setLoading(false);
    }
  };

  // Debounced version of the fetch function
  const debouncedFetch = useCallback(debounce(fetchAnime, 250), []);

  // On search input change
  const handleSearchChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setPage(1);
    debouncedFetch(newQuery, 1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    fetchAnime(query, value);
  };

  const handleAnimeClick = (id) => {
    navigate(`/anime/${id}`);
  };

  return (
    <Container>
      <TextField
        label="Search Anime"
        variant="outlined"
        fullWidth
        value={query}
        onChange={handleSearchChange}
        sx={{ marginBottom: 4 }}
      />

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}><CircularProgress /></Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : animeList.length === 0 && query ? (
        <Typography>No results found.</Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {animeList.map((anime) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={anime.mal_id}>
                <AnimeCard onClick={() => handleAnimeClick(anime.mal_id)}>
                  <CardMedia
                    component="img"
                    image={anime.images.jpg.image_url}
                    alt={anime.title}
                    height="300"
                  />
                  <CardContent>
                    <Typography variant="h6" noWrap>
                      {anime.title}
                    </Typography>
                  </CardContent>
                </AnimeCard>
              </Grid>
            ))}
          </Grid>

          {animeList.length > 0 && (
            <Box display="flex" justifyContent="center" mt={4}>
              <Pagination
                count={pageCount}
                page={page}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          )}
        </>
      )}
    </Container>
  );
};

export default SearchPage;

