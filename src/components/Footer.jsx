import React from "react";
import { Jumbotron } from "react-bootstrap";
import "../style/footer.css";

export default function Footer() {
  return (
    <>
      <Jumbotron fluid>
        <div className="footer">
          <div>
            <img src="./img/logo.png" alt="logo HealthCare Trip"></img>
          </div>
          <div>
              <p className="textFooter">© 2019 - 2020 Health Care Company - Développé par&nbsp;
              <a href="https://www.linkedin.com/in/tanguy-cirillo/">Tanguy Cirillo</a>,&nbsp;
              <a href="https://www.linkedin.com/in/jeromehamilka/">Jérôme Hamilka</a>,&nbsp;
              <a href="https://www.linkedin.com/in/benjamin-dexant-984995133/">Benjamin Dexant</a>&nbsp;
                et <a href="https://www.linkedin.com/in/thierryarzal/fr">Thierry Arzal</a>&nbsp;
                - Tous droits réservés</p>
          </div>
        </div>
      </Jumbotron>
    </>
  );
}
