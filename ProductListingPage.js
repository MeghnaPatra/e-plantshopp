import React, { useState } from 'react';
import PlantCard from '../components/PlantCard';

const plants = [
  { id: 1, name: 'Aloe Vera', price: 10.99, image: '/assets/aloe-vera.jpg', category: 'Air Purifying' },
  { id: 2, name: 'Lavender', price: 8.99, image: '/assets/lavender.jpg', category: 'Aromatic' },
  { id: 3, name: 'Basil', price: 5.99, image: '/assets/basil.jpg', category: 'Medicinal' },
  // Add more plants as needed
];

const ProductListingPage = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPlants = selectedCategory === 'All' ? plants : plants.filter(p => p.category === selectedCategory);

  return (
    <div className="product-listing">
      <h2>Our Plants</h2>
      <div>
        <button onClick={() => setSelectedCategory('All')}>All</button>
        <button onClick={() => setSelectedCategory('Air Purifying')}>Air Purifying</button>
        <button onClick={() => setSelectedCategory('Aromatic')}>Aromatic</button>
        <button onClick={() => setSelectedCategory('Medicinal')}>Medicinal</button>
      </div>
      <div className="product-category">
        {filteredPlants.map(plant => (
          <PlantCard key={plant.id} plant={plant} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
