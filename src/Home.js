import React, { useState } from "react";
import ResultsList from './components/ResultsList';
import FormResearch from './components/FormResearch';
import Title from './components/Title';
import Email from './components/Email';

const Home = () => {
  const [InfoReasearch, setInfoReasearch] = useState([]);
  return (
    <div>
      <Title text="Trouver votre destination santé :" />
      <FormResearch setInfoReasearch={setInfoReasearch}/>
      {InfoReasearch.length!==0?
        <ResultsList InfoReasearch={InfoReasearch} />
      :""
      }
      <Email/>
    </div>
  );
};

export default Home;
