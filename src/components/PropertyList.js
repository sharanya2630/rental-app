// src/components/PropertyList.js

import React from 'react';
// Removed the unused 'Grid' import
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties, onAddToCart }) => {
  return properties.map((property) => (
    <PropertyCard key={property.id} property={property} onAddToCart={onAddToCart} />
  ));
};

export default PropertyList;
