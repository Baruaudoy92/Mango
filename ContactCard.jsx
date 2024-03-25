import React from "react";
import './contactcard.css';

function ContactCard(props) {
   console.log(props); // Affiche les 'propriétés' passées au composant dans la console du navigateur
  return (
    <div className="all-contact">
      <img className="images" src={props.contact.imgUrl} alt="self portrait" />
      <h3 className="h3_contact">{props.contact.name}</h3>
      <p className="P_contact">{props.contact.phone}</p>
      <p className="pcontactme">{props.contact.email}</p>
    </div>
  );
}

export default ContactCard;
