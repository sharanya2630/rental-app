// import React, { useState, useEffect } from 'react';
// import { Grid } from '@mui/material';
// import PropertyList from './PropertyList';
// import properties from '../data/properties';

// const Home = ({ filter, onAddToCart }) => {
//   const [filteredProperties, setFilteredProperties] = useState(properties);

//   useEffect(() => {
//     const { city, priceRange } = filter;

//     let filtered = properties;

//     if (city) {
//       filtered = filtered.filter((property) =>
//         property.city.toLowerCase().includes(city.toLowerCase())
//       );
//     }

//     if (priceRange) {
//       const [min, max] = priceRange.split('-').map(Number);
//       filtered = filtered.filter(
//         (property) => property.price >= min && property.price <= max
//       );
//     }

//     setFilteredProperties(filtered);
//   }, [filter]);

//   return (
//     <Grid container spacing={3} sx={{ marginTop: 4 }}>
//       <PropertyList properties={filteredProperties} onAddToCart={onAddToCart} />
//     </Grid>
//   );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import PropertyList from './PropertyList';
import properties from '../data/properties';

const Home = ({ filter, onAddToCart }) => {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    const { city, minPrice, maxPrice } = filter;

    let filtered = properties;

    if (city) {
      filtered = filtered.filter((property) =>
        property.city.toLowerCase().includes(city.toLowerCase())
      );
    }

    const min = minPrice ? parseInt(minPrice, 10) : 0;
    const max = maxPrice ? parseInt(maxPrice, 10) : Infinity;

    filtered = filtered.filter(
      (property) => property.price >= min && property.price <= max
    );

    setFilteredProperties(filtered);
  }, [filter]);

  return (
    <Grid container spacing={3} sx={{ marginTop: 4 }}>
      <PropertyList properties={filteredProperties} onAddToCart={onAddToCart} />
    </Grid>
  );
};

export default Home;

