// Admin.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import User from './User';
import './admin.css';
import Footer from './Footer';

function Admin() {
  const [mangas, setMangas] = useState([]);
  const navigate = useNavigate();
  const user =  localStorage.getItem("user")

  useEffect(() => {
    const user = localStorage.getItem("user");
    
    if (user) {
      axios.get('http://localhost:4000/mangas/allmangas')
        .then(res => setMangas(res.data))
        .catch(error => console.log(error));
    } else {
      navigate('/login');
    }
  }, [navigate]);
  

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/mangas/mangas/${id}`)
      .then(res => {
        console.log(res.data);
        window.location.reload();
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <User />
        <h1 className='mangaa'>Manga</h1>
        <div className="admin-nav">
          <Link to='/addmanga'>Add-MANGA</Link>
        </div>
      </div>
      <div className="admin-content">
        {mangas.map((livre) => (
          <div className="manga-card" key={livre.manga_id}>
            <img src={livre.image} alt={livre.title} />
            <p>{livre.title}</p>
            <p>{livre.author}</p>
            <p>{livre.genre}</p>
            <p>{livre.publication_date}</p>
            <div>
              <button onClick={() => navigate(`/modifymanga/${livre.manga_id}`)}>Modifier</button>
              <button onClick={() => handleDelete(livre.manga_id)}>Supprimer</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default Admin;
