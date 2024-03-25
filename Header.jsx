// Header.js
import React from 'react';
import './header.css';
import NavListItem from '../components/NavListItem';
import navListData from '../data/navListData';

function Header() {
  // Vérification de la connexion de l'utilisateur
  const isLoggedIn = localStorage.getItem('user');

  // Filtrage de la liste de navigation en fonction de l'état de connexion de l'utilisateur
  const filteredNavList = navListData.filter(nav => {
    if (nav.link === 'login' || nav.link === 'register') {
      return isLoggedIn ? false : true; // Affichee les liens "Login" et "Register" lorsqu'ils sont déconnectés
    }
    return true; // Afficher les autres liens
  });

  return (
    <header>
      <a href="/" className="logo">
        <img src="https://www.mangas.fr/upload/media/logo-orange-1-62cc14908a3ce.png" alt="Mangas" width="70" height="36" />
      </a>
      <ul className="nav">
        {/* Rendu de la liste de navigation filtrée */}
        {filteredNavList.map(nav => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
      </ul>
    </header>
  );
}

export default Header;
