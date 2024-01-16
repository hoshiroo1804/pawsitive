import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Upload from './component/upload';
import Hasil from './component/hasil';
import Profile from './component/profil';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route>
        <Route path="/hasil" element={<Hasil/>}/>
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/profil" element={<Profile/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
