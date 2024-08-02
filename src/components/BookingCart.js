// src/components/BookingCart.js

import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';

const BookingCart = ({ cart, removeFromCart, setView }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.totalCost, 0);
  };

  return (
    <Box marginTop={4}>
      <Typography variant="h4" gutterBottom>
        Booking Cart
      </Typography>
      <Grid container spacing={3}>
        {cart.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.property.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Booking Dates: {item.startDate} - {item.endDate}
                </Typography>
                <Typography variant="h6" color="primary">
                  Total Cost: ${item.totalCost}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={() => removeFromCart(index)}
                  sx={{ marginTop: 2 }}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box marginTop={4}>
        <Typography variant="h5">Total: ${calculateTotal()}</Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => setView('checkout')}
          sx={{ marginTop: 2 }}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default BookingCart;
