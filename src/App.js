import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Infos from './Infos';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Infos" exact component={Infos} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
