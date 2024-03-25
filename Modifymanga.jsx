import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './modifymanga.css'

function ModifyManga() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [manga, setManga] = useState({});
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    publication_date: '',
    image: ''
  });

  useEffect(() => {
    // Fetch manga details by ID
    axios.get(`http://localhost:4000/mangas/mangas/${id}`)
      .then(response => {
        setManga(response.data);
        setFormData({
          title: response.data.title,
          author: response.data.author,
          genre: response.data.genre,
          description: response.data.description,
          publication_date: response.data.publication_date,
          image: response.data.image

        });
      })
      .catch(error => {
        console.error('Error fetching manga:', error);
      });
  }, [id]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Send updated manga data to server
      const response = await axios.put(`http://localhost:4000/mangas/mangas/${id}`, formData);
      console.log('Manga updated:', response.data);
      navigate('/admin');
    } catch (error) {
      console.error('Update error:', error.response.data);
      // Handle error
    }
  };

  return (
    <div className="modify-manga-container">
      <h1>Modify Manga</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
        <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} />
        <input type="text" name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <input type="date" name="publication_date" value={formData.publication_date} onChange={handleChange} />
        <input type="text" name="image" value={formData.image} onChange={handleChange} />
        <button type="submit">Save Changes</button>
      </form>,
    </div>
  );
}

export default ModifyManga;
