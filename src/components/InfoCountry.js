import React from "react";
import "../style/infos.css";
import Email from './Email'

const InfoCountry = () => {
  const myCountry = JSON.parse(localStorage.getItem("Country"));
  return (
    <div className="container containerInfos" >
      <h1>
        {myCountry.nameCountry} {myCountry.flag}
      </h1>
      <img
        className="image"
        src={myCountry.url_img_pays}
        alt={myCountry.nameCountry}
      />
      <h2>{myCountry.type}</h2>
      <p>Prestation : {myCountry.soins}</p>
      <p>Prix (brut*) : {myCountry.price}</p>
      <p>Ville : {myCountry.city}</p>
      <p>Nom de la clinique : {myCountry.cliniqueName}</p>
      <p>Docteur/Chirurgien : {myCountry.doctor}</p>
      <p>Qualité des soins** : {myCountry.qualite}/100</p>
      <p>Disponibilité : à partir du mardi 08/09/2020</p>
      <p>{myCountry.descriptif}</p>
      <p>{myCountry.intro}</p>
      <br></br>
      <hr></hr>
      <br></br>
      <p>Pour prendre rendez-vous, vous pouvez nous contacter au 0505050505.</p>
      <Email data={myCountry}/>
      <p className="italicMessage">* Tarif de la prestation seule, hors transport et logement.</p>
      <p className="italicMessage">** Notation par des experts, sur des critères médicaux uniquement.</p>
    </div>
  );
};

export default InfoCountry;
