import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import backgroundSplash from "./images/background-floral.jpg";
// import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${backgroundSplash})`,
          backgroundSize: "cover",
        }}
      >
        <Navigation />;
        <Header />
        <Project />
      </div>
    </React.Fragment>
  );
}

export default App;
