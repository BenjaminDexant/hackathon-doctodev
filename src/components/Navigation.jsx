import React from "react";
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import MediaQuery from 'react-responsive'

export default function Navigation() {
  return(
    <>
      <MediaQuery maxWidth={768}>
        <Navbar fixed="bottom" bg="light">
          <Navbar.Brand className="mx-auto" href="#home">
            <Link to="/">
              <img
                src="./img/searchIco.svg"
                width="40"
                height="40"
                className="d-inline-block align-center"
                alt="React Bootstrap logo"
              /> 
            </Link>
          </Navbar.Brand>
        </Navbar>
      </MediaQuery>
    </>
  );
}