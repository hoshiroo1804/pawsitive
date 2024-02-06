import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './component/Pages/LoginPage';
import Homesatu from './component/Pages/Homesatu';
import Homedua from './component/Pages/Homedua';
import Upload from './component/Pages/upload';
import Hasil from './component/Pages/hasil';
import Profile from './component/Pages/profil';



const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homesatu />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homedua" element={<Homedua />} />
        <Route path="/hasil" element={<Hasil />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profil" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
