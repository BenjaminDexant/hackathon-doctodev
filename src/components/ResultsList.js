import React from "react";
import Results from "./Results";

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
      {resultSample.map((country) => (
        <Results
          categorie={country.categorie}
          name={country.name}
          description={country.description}
          price={country.price}
        />
      ))}
    </div>
  );
};

export default ResultsList;
