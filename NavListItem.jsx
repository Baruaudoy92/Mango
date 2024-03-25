import React from 'react';
import './navListItem.css';
import { useNavigate } from 'react-router-dom';

// Composant pour afficher les éléments individuels de navigation
function NavListItem({ nav }) {

   const navigate = useNavigate();

// Vérifier si l'utilisateur est connecté en vérifiant le localStorage
  const isLoggedIn = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/home');
    window.location.reload();
  };

  return (
    <>
    <li>
      {/* Rendre le lien de navigation */}
      <a href={nav.link}>{nav.name}</a>
      {/* Une condition qui vérifie deux choses isLoggedIn = true; le lien égal à 'home' {Sinn elle retourne false} ? indique  le début de la partie "vraie" le début de la partie "vraie" de l'expression*/}
      {isLoggedIn && nav.link === 'home' ? (
        <>
        <a href="/admin">Admin</a>
        <button onClick={handleLogout}>Deconnexion</button>
        </>
      ) : null} {/*null signifie qu'aucun élément n'est rendu.*/}
    </li>
    </>
  );
}


export default NavListItem;

