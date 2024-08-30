import React from 'react';

const Checkout = ({ totalCost, totalItems }) => (
  <div className="checkout-page">
    <h2>Checkout</h2>
    <div className="checkout-summary">
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
    </div>
    <button>Coming Soon</button>
  </div>
);

export default Checkout;
