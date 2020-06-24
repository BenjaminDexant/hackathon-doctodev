import React from 'react';
import { Link } from 'react-router-dom';
import FormResearch from './components/FormResearch'

const Home = () => {
    return (
        <div>
            <h1>Page Home</h1>
            <Link to="Infos">Lien Page info</Link>
            <FormResearch />
        </div>
    )
}

export default Home;