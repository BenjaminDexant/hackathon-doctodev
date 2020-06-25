import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/results.css";

const ResultsOrigin = (props) => {
  return (
    <Card className="resultsOriginCard">
      <Card.Header>
        Votre pays : {props.nameCountry} {props.flag}
      </Card.Header>
      <Card.Body>
        <Card.Title>Categorie : {props.type}</Card.Title>
        <Card.Text>
          <div>Type de soin : {props.soins}</div>
          <div>Notation : {props.qualite}/100</div>
          <div>Prix (brut*) : {props.price}</div>
          <p className="italicMessage">
            * Tarif de la prestation seule, hors transport et logement.
          </p>
        </Card.Text>
        <Link to="/Infos">
          <Button
            variant="primary"
            onClick={() =>
              localStorage.setItem("Country", JSON.stringify(props))
            }
          >
            Plus d'infos
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ResultsOrigin;
