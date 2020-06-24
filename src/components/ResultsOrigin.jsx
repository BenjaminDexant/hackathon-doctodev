import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ResultsOrigin = (props) => {
  return (
    <Card>
      <Card.Header>Votre pays : {props.name}</Card.Header>
      <Card.Body>
        <Card.Title>Categorie : {props.categorie}</Card.Title>
        <Card.Text>
          <div>Type de soin : {props.description}</div>
          <div>Prix : {props.price}</div>
        </Card.Text>
        <Button variant="primary">Plus d'info</Button>
      </Card.Body>
    </Card>
  );
}

export default ResultsOrigin;
