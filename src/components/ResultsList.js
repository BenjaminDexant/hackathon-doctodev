import React from "react";
import Results from "./Results.jsx";
import { Alert } from 'react-bootstrap';


const resultSample = [
  {
    categorie: 'Soins dentaires',
    name: 'Espagne',
    description: 'Salchichon sangria !',
    price: 'pas cher'
  },
  {
    categorie: 'Soins dentaires',
    name: 'Hongrie',
    description: 'Stew and birra',
    price: 'encore moins cher'
  }
];


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
      :<Alert key={1} variant={'dark'}>
        Aucun resultat pour votre recherche...
      </Alert>}
    </div>
  );
};

export default ResultsList;
