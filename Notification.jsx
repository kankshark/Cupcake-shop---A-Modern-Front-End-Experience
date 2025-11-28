import React from 'react';
import './Notification.css';

const Notification = ({ message }) => {
  return (
    <div className="notification-container">
      <div className="notification-message">
        {message}
      </div>
    </div>
  );
};

export default Notification;