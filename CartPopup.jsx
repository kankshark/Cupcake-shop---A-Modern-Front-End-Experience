import React from 'react';
import '../CartPopup.css'; // We'll create this CSS file next

const CartPopup = ({ cartItems, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity, onClose, onClearCart, onCheckout }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-popup-overlay" onClick={onClose}>
      <div className="cart-popup" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart ({cartItems.length} items)</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-items-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.imgSrc} alt={item.name} className="cart-item-image" />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <div className="quantity-controls">
                    <button onClick={() => onDecreaseQuantity(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onIncreaseQuantity(item)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <div className='cart-actions'>
            <div className="cart-total">
              <h3>Total: ${calculateTotal()}</h3>
            </div>
            <div className="cart-buttons">
                <button className= "clear-cart-btn" onClick={onClearCart}>Clear Cart</button>
                <button className= "checkout-btn" onClick={onCheckout}>checkout</button>
                </div>
                </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPopup;