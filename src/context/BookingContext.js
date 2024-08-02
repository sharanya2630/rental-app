import React, { createContext, useState, useContext } from 'react';

export const BookingContext = createContext();

export const useBooking = () => {
  return useContext(BookingContext);
};

const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (property) => {
    setBookings((prev) => [...prev, property]);
  };

  const removeBooking = (property) => {
    setBookings((prev) => prev.filter((b) => b.id !== property.id));
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, removeBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
