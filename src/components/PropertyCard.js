import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  Chip,
  Box,
  Modal,
  TextField,
} from '@mui/material';
import { LocalHotel, AttachMoney, LocationCity } from '@mui/icons-material';
import './PropertyCard.css';

const PropertyCard = ({ property, onAddToCart }) => {
  const [open, setOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    startDate: '',
    endDate: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const calculateCost = (price, startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return nights * price;
  };

  const handleBookNow = () => {
    if (bookingDetails.startDate && bookingDetails.endDate) {
      const totalCost = calculateCost(
        property.price,
        bookingDetails.startDate,
        bookingDetails.endDate
      );
      onAddToCart(property, bookingDetails.startDate, bookingDetails.endDate, totalCost);
      handleClose();
    } else {
      alert('Please select start and end dates');
    }
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  return (
    <Grid item xs={12} sm={6} md={4} className="cardContainer">
      <Card className="card">
        <CardMedia
          component="img"
          alt={property.title}
          height="200"
          image={property.image}
          className="cardMedia"
        />
        <CardContent className="cardContent">
          <Typography variant="h6">{property.title}</Typography>
          <Box display="flex" alignItems="center" mb={1}>
            <LocationCity className="cityIcon" />
            <Typography variant="body2" color="textSecondary" ml={1}>
              {property.city}
            </Typography>
          </Box>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {property.description}
          </Typography>
          <Box display="flex" alignItems="center" mb={1}>
           
            <Typography variant="h6" color="primary" ml={1}>
              ₹{property.price} / night
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <LocalHotel className="bedroomIcon" />
            <Typography variant="body2" color="textSecondary" ml={1}>
              {property.bedrooms} Bedrooms
            </Typography>
          </Box>
          <Box mb={2}>
            {property.amenities.map((amenity) => (
              <Chip
                key={amenity}
                label={amenity}
                variant="outlined"
                color="primary"
                style={{ marginRight: 4 }}
              />
            ))}
          </Box>
          <Button
            variant="contained"
            className="bookNowButton"
            fullWidth
            onClick={handleOpen}
          >
            Book Now
          </Button>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="booking-modal-title"
        aria-describedby="booking-modal-description"
        className="modalContainer"
      >
        <Box className="modalContent">
          <Typography variant="h6" className="modalHeader" gutterBottom>
            Book {property.title}
          </Typography>
          <TextField
            label="Start Date"
            type="date"
            name="startDate"
            fullWidth
            margin="normal"
            value={bookingDetails.startDate}
            onChange={handleDateChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="End Date"
            type="date"
            name="endDate"
            fullWidth
            margin="normal"
            value={bookingDetails.endDate}
            onChange={handleDateChange}
            InputLabelProps={{ shrink: true }}
          />
          <Button
            variant="contained"
            className="confirmButton"
            fullWidth
            onClick={handleBookNow}
          >
            Confirm Booking
          </Button>
        </Box>
      </Modal>
    </Grid>
  );
};

export default PropertyCard;
