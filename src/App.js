// src/App.js

import React, { useState } from 'react';
import { CssBaseline, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookingCart from './components/BookingCart';
import CheckoutForm from './components/CheckoutForm';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

function App() {
  const [filter, setFilter] = useState({ city: '', priceRange: '' });
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('home');

  const handleAddToCart = (property, startDate, endDate, totalCost) => {
    setCart([...cart, { property, startDate, endDate, totalCost }]);
    alert('Property added to cart!');
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar filter={filter} setFilter={setFilter} cartCount={cart.length} setView={setView} view={view} />
      <Container>
        {view === 'home' && <Home filter={filter} onAddToCart={handleAddToCart} />}
        {view === 'cart' && <BookingCart cart={cart} removeFromCart={handleRemoveFromCart} setView={setView} />}
        {view === 'checkout' && <CheckoutForm setView={setView} />}
      </Container>
    </ThemeProvider>
  );
}

export default App;
