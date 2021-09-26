import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
// import Footer from "./components/Footer";
import "./App.css";

//particles react package
import { tsParticles } from "tsparticles";

function App() {
  return (
    <React.Fragment>
      <Navigation />;
      <Header />
      <Project />
    </React.Fragment>
  );
}

export default App;
