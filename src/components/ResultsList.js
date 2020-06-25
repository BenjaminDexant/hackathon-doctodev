import React from "react";
import Results from "./Results.jsx";
import { Alert } from 'react-bootstrap';
import ResultsOrigin from "./ResultsOrigin.jsx";
import hackathon from '../hackathon.json';
import Title from './Title';


const ResultsList = ({InfoReasearch}) => {
  let {country, healthCare, categ} = InfoReasearch;

  categ = categ[0].replace(/ /g, "_")
  healthCare = healthCare[0].replace(/ /g, "_")
  let allData = Object.entries(hackathon.categorie);
  allData = allData.filter(el => el[0] === categ)[0];

  let healthType = Object.entries(allData[1].type_de_soin);
  healthType = healthType.filter(el => el[0] === healthCare)[0];
  healthType = Object.entries(healthType[1])
  
  let originalCountry = healthType.filter(el => el[0] === country)[0];
  healthType = healthType.filter(el => el[0] !== country)

  console.log(healthType)
  return (
    <div className="container">
      {healthType.length > 0 && originalCountry
      ?
      <>
        <Title text="Ce que nous vous proposons :"/>
        <ResultsOrigin
        categorie={originalCountry[1].type}
        name={originalCountry[0]}
        description={originalCountry[1].soins}
        price={originalCountry[1].price}
        />
      </>
      :""
      }
      {healthType.length > 0 && originalCountry
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
    </div>
  );
};


export default ResultsList;
