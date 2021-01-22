import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Navigation = () => {
  const { cart } = useContext(CartContext);
  console.log('first cart', cart);
  return (
    <div className="navigation">
      {console.log(cart)}
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{cart.length}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;
