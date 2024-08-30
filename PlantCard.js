import React from 'react';

const PlantCard = ({ plant, onAddToCart }) => (
  <div className="product-card">
    <img src={plant.image} alt={plant.name} />
    <h3>{plant.name}</h3>
    <p>${plant.price}</p>
    <button onClick={() => onAddToCart(plant)}>Add to Cart</button>
  </div>
);

export default PlantCard;
