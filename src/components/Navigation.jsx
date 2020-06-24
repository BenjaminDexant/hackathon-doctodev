import React from "react";
import { Navbar } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

export default function Navigation() {
  return(
    <>
      <Navbar fixed="bottom" bg="light">
        <Navbar.Brand className="mx-auto" href="#home">
          <Link to="/home">
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
    </>
  );
}