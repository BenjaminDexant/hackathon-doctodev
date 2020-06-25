import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import "../style/Header.css";

export default function Header() {
  return (
    <>
      <Jumbotron className="header" fluid>
        <Container>
          <img src="./img/logo2.png" alt="logo HealthCare Trip" width="250px"></img>
          <p className="Slogan">Santé pour tous où que vous soyez!</p>
        </Container>
      </Jumbotron>
    </>
  );
}
