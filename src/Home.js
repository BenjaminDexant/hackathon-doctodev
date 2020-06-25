import React from "react";
import { Link } from "react-router-dom";
import ResultsList from './components/ResultsList';
import FormResearch from './components/FormResearch';
import Title from './components/Title';
import Email from './components/Email'
import {  } from 'react-notifications';

const Home = () => {
  return (
    <div>

      <Title text="Recherche :" />
      <FormResearch />
      <Title text="Résultat :"/>
      <ResultsList />
      <Link to="Infos">Lien Page info</Link>
      <Email/>
    </div>
  );
};

export default Home;
