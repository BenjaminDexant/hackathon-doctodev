import React from "react";
import "../style/infos.css";

const InfoCountry = () => {
  const myCountry = JSON.parse(localStorage.getItem("Country"));
  return (
    <div className="container">
      <h1>{myCountry.nameCountry}</h1>
      <img src={myCountry.url_img_pays} alt={myCountry.nameCountry} />
      <h2>{myCountry.type}</h2>
      <p>Prestation : {myCountry.soins}</p>
      <p>Prix (brut) : {myCountry.price}</p>
      <p>Nom de la clinique : {myCountry.cliniqueName}</p>
      <p>Notation : {myCountry.qualite}</p>
      <p>{myCountry.descriptif}</p>
    </div>
  );
};

export default InfoCountry;
