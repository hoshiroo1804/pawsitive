// Headersatu.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Headersatu = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    // Logic for handling Home button click (stay on the current page)
    console.log('Home button clicked');
  };

  const handleLoginClick = () => {
    // Navigate to the Login page
    navigate('/login');
  };

  return (
    <header className="headersatu-container">
      <div className="headersatu-judul">
        <p>PawSitive Detect</p>
      </div>
      <div className="headersatu-links">
        <button onClick={handleHomeClick}>Home</button>
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </header>
  );
};

export default Headersatu;
