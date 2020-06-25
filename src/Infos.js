import React from "react";
import InfoCountry from "./components/InfoCountry";
import Maps from "./components/Maps";
import Email from './components/Email'

const Infos = () => {
  return (
    <div>
      <Maps />
      <InfoCountry />
      <Email/>
    </div>
  );
};

export default Infos;
