// src/components/CupcakeCard.jsx
import React from 'react';
import './CupcakeCard.css';

// Change the prop destructuring from { name, description, price, imageUrl } to { cupcake, onAddToCart }
const CupcakeCard = ({ cupcake, onAddToCart }) => {
  return (
    <div className="cupcake-card">
      <img src={cupcake.imgSrc} alt={cupcake.name} className="cupcake-image" />
      <div className="card-content">
        <h4>{cupcake.name}</h4>
        <p>{cupcake.description}</p>
        <p className="price">${cupcake.price.toFixed(2)}</p>
        <button className="cupcake-card-button" onClick={() => onAddToCart(cupcake)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CupcakeCard;