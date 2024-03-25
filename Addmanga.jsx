import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Addmanga() {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    stock_quantity: '',
    publication_date: '',
    Image: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/mangas/create', formData)
      console.log('New manga registered:', response.data);
      navigate("/admin");
      // You can redirect or show a success message here
    } catch (error) {
      console.error('Registration error:', error.response.data);
      // Handle error, show error message, etc.
    }
  };
  return (
      <div className="container">
      <div className="header">
        <div className="title">
        <h1>Mangas</h1>
        </div>
        <div className="form">
      <h2>Add MANGA</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="title" onChange={handleChange} />
        <input type="text" name="author" placeholder="author" onChange={handleChange} />
        <input type="text" name="publication_date" placeholder="publication_date" onChange={handleChange} />
        <input type="text" name="genre" placeholder="genre" onChange={handleChange} />
        <input type="text" name="description" placeholder="description" onChange={handleChange} />
        <input type="number" name="stock_quantity" placeholder="stock_quantity" onChange={handleChange} />
        <input type="text" name="image" placeholder="image" onChange={handleChange} />
        <button className='addbut' type="submit">Register</button>
      </form>
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default Addmanga;
