import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
//imports all pages that are being renderd
import Container from "./components/page-container";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Footer} />
        <Route exact path="/" component={Home} />
        <Container />
      </Switch>
    </Router>
  );
}

export default App;
