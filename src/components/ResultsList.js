import React from "react";
import Results from "./Results.jsx";
import { Alert } from 'react-bootstrap';
import ResultsOrigin from "./ResultsOrigin.jsx";
import hackathon from '../hackathon.json';

const ResultsList = () => {
  const paysOrigin = "France";
  const categ = "soins_dentaires";
  const typeDeSoin = "pose_implant_dentaire";

  let allData = Object.entries(hackathon.categorie);
  allData = allData.filter(el => el[0] === categ)[0];

  let healthType = Object.entries(allData[1].type_de_soin);
  healthType = healthType.filter(el => el[0] === typeDeSoin)[0];
  healthType = Object.entries(healthType[1])
  
  let originalCountry = healthType.filter(el => el[0] === paysOrigin)[0];
  healthType = healthType.filter(el => el[0] !== paysOrigin)

  return (
    <div className="container">
      {healthType.length > 0
      ?
      healthType.map(data => (
        <Results
          categorie={data[1].type}
          name={data[0]}
          description={data[1].soins}
          price={data[1].price}
        />
      ))
      :<Alert key={1} variant={'danger'}>
        Aucun resultat pour votre recherche...
      </Alert>}
      <div>
        <ResultsOrigin
          categorie={originalCountry[1].type}
          name={originalCountry[0]}
          description={originalCountry[1].soins}
          price={originalCountry[1].price}
        />
      </div>
    </div>
  );
};

export default ResultsList;
