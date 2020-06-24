import React from "react";
import Results from "./Results.jsx";
import { Alert } from 'react-bootstrap';
import ResultsOrigin from "./ResultsOrigin.jsx";


const resultSample = [
  {
    categorie: "Categorie : Soins dentaires",
    name: "Espagne",
    description: "Type de soin : Couronne dentaire céramique + métal",
    price: "Prix : dès 290 € *hors transport, logement et remboursement*",
  },
  {
    categorie: "Categorie : Soins dentaires",
    name: "Hongrie",
    description: "Type de soin : Couronne dentaire céramique + métal",
    price: "Prix : 225 € *hors transport, logement et remboursement*",
  },
];

const originSample = 
  {
    categorie: "Categorie : Soins dentaires",
    name: "Votre pays : France",
    description: "Type de soin : Couronne dentaire céramique + métal",
    price: "Prix : 700 – 900 € *hors remboursement*",
  };

const ResultsList = () => {
  return (
    <div className="container">
      {resultSample.length > 0
      ?
      resultSample.map((country) => (
        <Results
          categorie={country.categorie}
          name={country.name}
          description={country.description}
          price={country.price}
        />
      ))
      :<Alert key={1} variant={'danger'}>
        Aucun resultat pour votre recherche...
      </Alert>}
      <div>
        <ResultsOrigin
          categorie={originSample.categorie}
          name={originSample.name}
          description={originSample.description}
          price={originSample.price}
        />
      </div>
    </div>
  );
};

export default ResultsList;
