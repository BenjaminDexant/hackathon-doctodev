import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import Footer from "./components/Footer"
import Infos from "./Infos";
import "./App.css";
import Navigation from "./components/Navigation";
require('dotenv').config()

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Infos" exact component={Infos} />
        </Switch>
        <Navigation />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
