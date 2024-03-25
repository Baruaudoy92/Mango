import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './produitmanga.css';

function ProduitManga() {
  const [manga, setManga] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Use useParams hook to get mangaId from URL params

  useEffect(() => {
    const fetchMangaDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/mangas/mangas/${id}`);
        setManga(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMangaDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!manga) {
    return <div>Manga not found</div>;
  }

  return (
    <div className='produitall'>
      <h2 className='produit_title'>{manga.title}</h2>
      <img src={manga.image} alt={manga.title} />
      <p className='produit1' data-label='Author'>: {manga.author}</p>
      <p className='produit2' data-label='Genre'>: {manga.genre}</p>
      <p className='produit3' data-label='Publication Date'>: {manga.publication_date}</p>
      {/* Add more details here as needed */}
    </div>
  );
  
}

export default ProduitManga;
