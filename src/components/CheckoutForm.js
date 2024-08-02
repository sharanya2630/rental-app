// src/components/CheckoutForm.js

import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

const CheckoutForm = ({ setView }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform checkout logic here
    alert('Checkout Successful!');
    setView('home');
  };

  return (
    <Box marginTop={4}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Address"
          name="address"
          fullWidth
          margin="normal"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <TextField
          label="Card Number"
          name="cardNumber"
          fullWidth
          margin="normal"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
        <TextField
          label="Expiration Date"
          name="expiration"
          type="month"
          fullWidth
          margin="normal"
          value={formData.expiration}
          onChange={handleChange}
          required
        />
        <TextField
          label="CVV"
          name="cvv"
          type="password"
          fullWidth
          margin="normal"
          value={formData.cvv}
          onChange={handleChange}
          required
        />
        <Button variant="contained" color="primary" type="submit" fullWidth sx={{ marginTop: 2 }}>
          Complete Purchase
        </Button>
      </form>
    </Box>
  );
};

export default CheckoutForm;
