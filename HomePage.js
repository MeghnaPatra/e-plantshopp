import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="home-page">
    <h1>Welcome to E-Plant Shop</h1>
    <p>Discover a wide variety of houseplants for your home and garden.</p>
    <Link to="/products" className="get-started">Get Started</Link>
  </div>
);

export default HomePage;
