import React from 'react';
import '../../styles/LoginPage.css';  // Import file CSS untuk styling
import LoginForm from '../Molekul/LoginForm';

const LoginPage = () => {
  return (
    <div className="login-page-container">
      <div className="background-container">
        <div className="leftlogin-container">
          {/* Gunakan elemen img dan berikan src dengan path ke Logo.png */}
          <img src="src/icon/WhatsApp_Image_2024-01-02_at_3.17.43_PM-removebg-preview.png" alt="img"/>
          <div className="Login-judul">
            <h2>JUDUL</h2>
          </div>
          <div className="login-text">
            <p>Tulisan di bagian bawah halaman.</p>
          </div>
        </div>

        <div className="rightlogin-container">
          <div className="login-form-container">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
