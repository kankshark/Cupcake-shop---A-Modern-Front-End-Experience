import React from 'react';
import CupcakeCard from './CupcakeCard';
import './MenuPopup.css';

const MenuPopup = ({ cupcakes, onAddToCart, onClose }) => {
    console.log('Cupcakes received:', cupcakes);
  return (
    <div className="menu-popup-overlay" onClick={onClose}>
      <div className="menu-popup" onClick={e => e.stopPropagation()}>
        <div className="menu-header">
          <h3>Our Cupcake Collection</h3>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="cupcake-list">
          {cupcakes.map((cupcake) => (
            <CupcakeCard
              key={cupcake.id}
              cupcake={cupcake}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPopup;