import React from "react";
import { Card } from "react-bootstrap";

const InfoCountry = () => {
  const myCountry = JSON.parse(localStorage.getItem("Country"));
  return (
    <Card>
      <Card.Header>{myCountry.name}</Card.Header>
      <Card.Body>
        <Card.Title>Categorie : {myCountry.categorie}</Card.Title>
        <Card.Text>
          <div>Type de soin : {myCountry.description}</div>
          <div>Prix : {myCountry.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfoCountry;
