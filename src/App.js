//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import AnimeDetailsPage from './pages/AnimeDetailsPage';
import Subscribe from './pages/Subcribe';
import AboutPage from './pages/About_us';
import Layout from './Compenets/Layout';

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/anime/:id" element={<AnimeDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;

