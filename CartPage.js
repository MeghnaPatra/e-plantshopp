import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, onRemove, onIncrease, onDecrease }) => (
  <div className="cart-page">
    <Cart cartItems={cartItems} onRemove={onRemove} onIncrease={onIncrease} onDecrease={onDecrease} />
  </div>
);

export default CartPage;
