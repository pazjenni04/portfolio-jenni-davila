import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import "./App.css";
//imports all pages that are being renderd
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";
import Navbar from "./components/pages/Navbar";

function App() {
  const history = useHistory();

  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Footer} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
        {/* anything that happens will redirected to the home page */}
      </Switch>
    </Router>
  );
}

export default App;
