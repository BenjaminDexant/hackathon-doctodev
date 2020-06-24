import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Jumbotron className="header" fluid>
        <Container>
          <h1>DoctoTour</h1>
          <p>Santé pour tous où que vous soyez!</p>
        </Container>
      </Jumbotron>
    </>
  );
}
