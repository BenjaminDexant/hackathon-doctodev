import React from "react";
import ResultsList from './components/ResultsList';
import FormResearch from './components/FormResearch';
import Title from './components/Title';
import Email from './components/Email'

const Home = () => {
  return (
    <div>
      <Title text="Trouver votre destination santé :" />
      <FormResearch />
      <Title text="Ce que nous vous proposons :"/>
      <ResultsList />
      <Email/>
    </div>
  );
};

export default Home;
