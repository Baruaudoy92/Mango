import axios from "axios"; 
// Importation du module axios pour effectuer des requêtes HTTP
import "./mangas.css";
import { useEffect, useState } from "react";
//Importation des hooks useEffect et useState depuis React
import {useNavigate} from "react-router-dom";

import Footer from "./Footer";

// Tableau contenant les données des bannières à afficher
const bannersArr = [
  {
    name: "",
    img:
      "https://i.pinimg.com/originals/a7/e5/75/a7e5750e257c3a8718af08508f461563.gif",
    heading1: " ALL day EveryDAY ",
    heading2: "ONLY FOR TODAY!!"
  },
  {
    name: "",
    img:
      "https://i.pinimg.com/originals/7f/a2/43/7fa243b1a78cc227e3fed2d878cfecc8.gif",
    heading1: "終日マンガの日",
    heading2: "BIENVENUE"
  },
  {
    name: "",
    img:
      "https://i.pinimg.com/originals/32/ed/12/32ed12edd7aedb088b3dc0b7a75ae84c.gif",
    heading1: "Celodenný manga deň",
    heading2: "WellCOME"
  },
];

function Mangas() {
    // Utilisation du hook useState pour gérer l'état du composant
  const [banner, setBanner] = useState(bannersArr[1]); // État de la bannière actuellement affichée
  const [mangas, setMangas] = useState([]); // État de la liste de mangas récupérée depuis l'API


  const navigate = useNavigate()

   // Utilisation du hook useEffect pour effectuer des actions à chaque rendu du composant
  useEffect(() => {
    // Appel à l'API pour récupérer la liste des mangas
    axios.get('http://localhost:4000/mangas/allmangas') 
      .then(res => setMangas(res.data)) // Mise à jour de l'état avec les données récupérées
      .catch(error => console.log(error));
  }, []);

  // Fonction pour passer à la bannière suivante
  const handleForwardClick = () => {
    let indexOfCurrentBanner = bannersArr.indexOf(banner);
    if (indexOfCurrentBanner === bannersArr.length - 1) {
      setBanner(bannersArr[0]);
    } else {
      setBanner(bannersArr[indexOfCurrentBanner + 1]);
    }
  };

  // Fonction pour revenir à la bannière précédente
  const handleBackwardClick = () => {
    let indexOfCurrentBanner = bannersArr.indexOf(banner);
    if (indexOfCurrentBanner === 0) {
      setBanner(bannersArr[bannersArr.length - 1]);
    } else {
      setBanner(bannersArr[indexOfCurrentBanner - 1]);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${banner.img})`
        }}
        className="banner__container"
      >
        <div>
          <button onClick={handleBackwardClick} className="icon-button btn1">
            <img
              alt="arrow"
              src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/icon%20component/left-arrow.svg"
            />
          </button>
          <button onClick={handleForwardClick} className="icon-button btn2">
            <img
              alt="arrow"
              src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/icon%20component/rightArrow.svg"
            />
          </button>
        </div>
        <p className="banner__heading1">{banner.heading1}</p>
        <p className="banner__heading2">{banner.heading2}</p>
      </div>
      <div className="mangas-container">
        {/* Mapping sur la liste des mangas pour afficher chaque élément */}
        {mangas.map((livre) => (
          <div
          onClick={()=>navigate(`/produitdetailes/${livre.manga_id}`)}
            style={{
              color: "white",
              border: "1px solid white",
            }}
            key={livre.manga_id}
            className="manga-item">
            {/* Affichage des informations de chaque manga */}
            <img src={livre.image} alt={livre.title} />
            <p>{livre.title}</p>
            <p>{livre.author}</p>
            <p>{livre.genre}</p>
            <p>{livre.publication_date && livre.publication_date.substring(0, 10)}</p>
          </div>
        ))}
        <Footer />
      </div>
    </>
  );
}

export default Mangas;
