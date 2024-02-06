import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Headerdua.css';


const Headerdua = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    // Logic for handling Home button click (stay on the current page)
    console.log('Home button clicked');
  };

  const handleUploadClick = () => {
    // Navigate to the Login page
    navigate('/upload');
  };
  
  const handleLoveClick = () => {
    // Logic for handling New Menu button click
    console.log('Love button clicked');
    // Add your logic for the new menu here
  };

  const handleProfileClick = () => {
    // Navigate to the Login page
    navigate('/profil');
  };

  return (
    <header className="headerdua-container">
      <div className="headerdua-judul">
        <p>PawSitive Detect</p>
      </div>
      <div className="headerdua-links">
        <button onClick={handleHomeClick}>Home</button>
        <button onClick={handleUploadClick}>Upload</button>
        <button onClick={handleLoveClick}>
          <img src="src/icon/love-removebg-preview.png" alt="love" /> 
        </button>
        <button onClick={handleProfileClick}>
          <img src="src/icon/profile-removebg-preview.png" alt="profile" /> 
        </button>
      </div>
    </header>
  );
};

export default Headerdua;
