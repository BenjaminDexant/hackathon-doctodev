import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/results.css";

const Results = (props) => {
  return (
    <Card className="resultsCard">
      <Card.Header>{props.nameCountry}</Card.Header>
      <Card.Body>
        <Card.Title>Categorie : {props.type}</Card.Title>
        <Card.Text>
          <div>Type de soin : {props.soins}</div>
          <div>Prix : {props.price}</div>
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

export default Results;
