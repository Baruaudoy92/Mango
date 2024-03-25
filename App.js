import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Banner from './pages/Banner';
import Register from './pages/Register';
import Login from './pages/Login';
import Actualités from './components/Actualités';
import Admin from './pages/Admin';
import Addmanga from './pages/Addmanga';
import Aboutus from './pages/Aboutus';
import Mangas from './pages/Mangas';
import ModifyManga from './pages/Modifymanga';
import Modifyuser from './pages/Modifyuser';
import ProduitManga from './pages/Produitmanga';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Banner />} /> {/* Route for home */}
          <Route path="/mangas" element={<Mangas />} /> {/* Route for manags */}
          <Route path="/aboutus" element={<Aboutus />} /> {/* Route for about us */}
          <Route path="/register" element={<Register />} /> {/* Route for register */}
          <Route path="/login" element={<Login />} /> {/* Route for login */}
          <Route path="/actualités" element={<Actualités />} /> {/* Route for actualités */}
          <Route path="/admin" element={<Admin />} /> {/* Route for admin */}
          <Route path="/addmanga" element={<Addmanga />} /> {/* Route for addmanga */}
          <Route path="/modifymanga/:id" element={<ModifyManga />} /> {/* Route for modifymanga */}
          <Route path="/modifyuser/:id" element={<Modifyuser />} /> {/* Route for modifyuser */}
          <Route path="/produitdetailes/:id" element={<ProduitManga />} /> {/* Route for modifyuser */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;