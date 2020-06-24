import React from "react";
import Results from "./Results";
import ResultsOrigin from "./ResultsOrigin";

const resultSample = [
  {
    categorie: "Soins dentaires",
    name: "Espagne",
    description: "Salchichon sangria !",
    price: "pas cher",
  },
  {
    categorie: "Soins dentaires",
    name: "Hongrie",
    description: "Stew and birra",
    price: "encore moins cher",
  },
];

const originSample = 
  {
    categorie: "Soins dentaires",
    name: "France",
    description: "Boeuf bourguignon",
    price: "Tres cher",
  };

const ResultsList = () => {
  return (
    <div>
      <div>
        {resultSample.map((country) => (
          <Results
            categorie={country.categorie}
            name={country.name}
            description={country.description}
            price={country.price}
          />
        ))}
      </div>
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
