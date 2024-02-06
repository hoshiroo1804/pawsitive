import React, { useState } from 'react';
import "../../styles/LoginForm.css";

const LoginForm = () => {
  // State untuk menyimpan nilai input username dan password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Fungsi untuk menangani perubahan nilai input username
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Fungsi untuk menangani perubahan nilai input password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Fungsi untuk menangani login
  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      if (response.status === 200) {
        // Jika berhasil, pindahkan pengguna ke rute yang diinginkan (misalnya "/homedua")
        window.location.href = '/homedua';
      } else {
        // Jika gagal, tampilkan pesan kesalahan
        console.error('Gagal login. Status:', response.status);
        alert('Login gagal. Periksa kembali username dan password Anda.');
      }
    } catch (error) {
      console.error('Gagal melakukan login:', error.message);
      alert('Terjadi kesalahan saat melakukan login. Silakan coba lagi.');
    }
  };  

  return (
    <div className="loginform-container">
      <form className="login-form">
        <label className="login-label" htmlFor="username">
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="login-input"
            placeholder="Username"  
          />
        </label>

        <label className="login-label" htmlFor="password">
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="login-input"
            placeholder="Password"  
          />
        </label>

        <button type="button" onClick={handleLogin} className="login-button">
          Login
        </button>

        <p className="forgot-password-link">
          <a>Forgot Password?</a>
        </p>
        <p className="privacy-link">
          <a>Privacy</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
