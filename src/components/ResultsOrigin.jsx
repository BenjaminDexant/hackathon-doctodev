import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ResultsOrigin = (props) => {
  return (
    <Card>
      <Card.Header>{props.name}</Card.Header>
      <Card.Body>
        <Card.Title>{props.categorie}</Card.Title>
        <Card.Text>
          <div>{props.description}</div>
          <div>{props.price}</div>
        </Card.Text>
        <Button variant="primary">Plus d'info</Button>
      </Card.Body>
    </Card>
  );
}

export default ResultsOrigin;
