import React from "react";
import Typed from "react-typed";

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
};

function Home() {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <p style={style.headerTitle}>Welcome to my page!</p>
        <Typed
          className="typed-text"
          strings={["HTML5", "CSS", "NODE.JS", "REACT.JS"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        ></Typed>
        <a href="#contact" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Home;
