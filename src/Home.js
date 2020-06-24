import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import ResultsList from './components/ResultsList';
import FormResearch from './components/FormResearch';

const Home = () => {
  return (
    <div>
      <Header />
      <FormResearch />
      <ResultsList />
      <Link to="Infos">Lien Page info</Link>
    </div>
  );
};

export default Home;
