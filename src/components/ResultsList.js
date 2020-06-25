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
  console.log(healthType)

  let originalCountry = Object.entries(healthType[1]);
  originalCountry = originalCountry.filter(el => el[0] === paysOrigin)[0];
  console.log(originalCountry)
  return (
    <div className="container">
      {allData.length > 0
      ?
      allData.map(data => (
        <Results
          categorie={data.categorie}
          name={data.name}
          description={data.description}
          price={data.prixOperation}
        />
      ))
      :<Alert key={1} variant={'danger'}>
        Aucun resultat pour votre recherche...
      </Alert>}
      <div>
        <ResultsOrigin
          categorie={originalCountry.categorie}
          name={originalCountry.name}
          description={originalCountry.description}
          price={originalCountry.price}
        />
      </div>
    </div>
  );
};

export default ResultsList;
