import React from 'react';

const Cart = ({ cartItems, onRemove, onIncrease, onDecrease }) => {
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-summary">
        <p>Total Items: {totalItems}</p>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>${item.price} x {item.quantity}</p>
            <button onClick={() => onIncrease(item)}>+</button>
            <button onClick={() => onDecrease(item)}>-</button>
            <button onClick={() => onRemove(item)}>Delete</button>
          </div>
        </div>
      ))}
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
