import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/results.css";

const Results = (props) => {
  return (
    <Card className="resultsCard">
      <Card.Header>
        {props.nameCountry} {props.flag}
      </Card.Header>
      <Card.Body>
        <Card.Title>Categorie : {props.type}</Card.Title>
        <Card.Text>
          Type de soin : {props.soins}
        </Card.Text>
        <Card.Text>
          Notation : {props.qualite}/100
        </Card.Text>
        <Card.Text>
          Prix (brut) : {props.price}
        </Card.Text>
        <Link to="/Infos">
          <Button
            variant="primary"
            onClick={() =>
              localStorage.setItem("Country", JSON.stringify(props))
            }
            style={{marginTop: "24px"}}
          >
            Plus d'infos
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Results;
