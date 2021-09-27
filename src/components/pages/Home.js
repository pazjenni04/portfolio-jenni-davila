import React from "react";
import Typed from "react-typed";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const style = {
  pFont: {
    fontSize: "30px",
    color: "#FFFFFF",
  },
  headerTitle: {
    color: "#9A8AEC",
    fontSize: "70px",
    fontWeights: "10px",
  },
  blackBackground: {
    height: "100px",
    background: "#000301",
    width: "auto",
  },
  nameTitle: {
    fontSize: "150px",
    fontWeights: "10px",
  },
};

function Home() {
  return (
    <div>
      <Navbar />
      <div className="header-wrapper">
        <div className="main-info">
          <h1 style={style.nameTitle} className="name">
            Jennifer Davila
          </h1>
          <p style={style.headerTitle}>Welcome to my page!</p>
          <Typed
            className="typed-text"
            strings={["HTML5", "CSS", "NODE.JS", "REACT.JS"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          ></Typed>
        </div>
      </div>
    </div>
  );
}

export default Home;
