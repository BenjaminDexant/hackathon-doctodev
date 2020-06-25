import React from "react";
import Results from "./Results.jsx";
import { Alert } from 'react-bootstrap';
import ResultsOrigin from "./ResultsOrigin.jsx";
import hackathon from '../hackathon.json';

const ResultsList = () => {
  const paysOrigin = "France";
  const categ = "soins_dentaires";
  const typeDeSoin = "Pose_d'un_implant_dentaire";

  let allData = Object.entries(hackathon.categorie);
  allData = allData.filter(el => el[0].toUpperCase() === categ.toUpperCase())[0];

  let healthType = Object.entries(allData[1].type_de_soin);
  healthType = healthType.filter(el => el[0].toUpperCase() === typeDeSoin.toUpperCase())[0];
  healthType = Object.entries(healthType[1])
  
  let originalCountry = healthType.filter(el => el[0] === paysOrigin)[0];
  healthType = healthType.filter(el => el[0] !== paysOrigin)

  return (
    <div className="container">
      {healthType.length > 0
      ?
      healthType.map(data => (
        <Results
          type={data[1].type}
          nameCountry={data[0]}
          soins={data[1].soins}
          price={data[1].price}
          descriptif={data[1].descriptif}
          cliniqueName={data[1].cliniqueName}
          qualite={data[1].qualite}
          url_img_pays={data[1].url_img_pays}
          city={data[1].city}
          doctor={data[1].doctor}
        />
      ))
      :<Alert key={1} variant={'danger'}>
        Aucun resultat pour votre recherche...
      </Alert>}
      <div>
        <ResultsOrigin
          type={originalCountry[1].type}
          nameCountry={originalCountry[0]}
          soins={originalCountry[1].soins}
          price={originalCountry[1].price}
          descriptif={originalCountry[1].descriptif}
          cliniqueName={originalCountry[1].cliniqueName}
          qualite={originalCountry[1].qualite}
          url_img_pays={originalCountry[1].url_img_pays}
          city={originalCountry[1].city}
          doctor={originalCountry[1].doctor}
        />
      </div>
    </div>
  );
};

export default ResultsList;
