import React from 'react';
import { Link } from 'react-router-dom';
import ResultsList from './components/ResultsList';


const Home = () => {
    return (
        <div>
            <h1>Page Home</h1>
            <ResultsList />
            <Link to="Infos">Lien Page info</Link>
        </div>
    )
}

export default Home;