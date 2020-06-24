import React from "react";
import { Card } from "react-bootstrap";

const InfoCountry = (props) => {
  return (
    <Card>
      <Card.Header>{props.name}</Card.Header>
      <Card.Body>
        <Card.Title>Categorie : {props.categorie}</Card.Title>
        <Card.Text>
          <div>Type de soin : {props.description}</div>
          <div>Prix : {props.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfoCountry;
