// src/components/BookingForm.js

import React from 'react';
import { TextField, Grid } from '@mui/material';

const BookingForm = ({ setBookingDetails }) => {
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  return (
    <Grid container spacing={3} marginY={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Start Date"
          type="date"
          name="startDate"
          fullWidth
          onChange={handleDateChange}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="End Date"
          type="date"
          name="endDate"
          fullWidth
          onChange={handleDateChange}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
    </Grid>
  );
};

export default BookingForm;
