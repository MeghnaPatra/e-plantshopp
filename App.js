import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import CartPage from './pages/CartPage';
import Checkout from './components/Checkout';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (plant) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === plant.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...plant, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (plant) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== plant.id));
  };

  const increaseQuantity = (plant) => {
    setCartItems(prevItems => prevItems.map(item =>
      item.id === plant.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const decreaseQuantity = (plant) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === plant.id);
      if (existingItem.quantity > 1) {
        return prevItems.map(item =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevItems.filter(item => item.id !== plant.id);
      }
    });
  };

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <Header cartCount={totalItems} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage onAddToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} onRemove={removeFromCart} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} />} />
        <Route path="/checkout" element={<Checkout totalCost={totalCost} totalItems={totalItems} />} />
      </Routes>
    </Router>
  );
};

export default App;
