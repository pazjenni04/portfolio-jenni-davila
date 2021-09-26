import React from "react";
import Thailandpic from "../images/Thailand.png";
import Hiking from "../images/Hiking.jpg";
import Spain from "../images/Spain-fountain.jpg";

const style = {
  pFont: {
    fontSize: "30px",
    color: "#FFFFFF",
  },
  headerTitle: {
    color: "#9A8AEC",
    fontSize: "50px",
  },
  blackBackground: {
    height: "100px",
    background: "#000301",
    width: "auto",
  },
};

function Header() {
  return (
    <div className="container">
      <div className="flex-row ">
        <img
          src={Thailandpic}
          style={{
            maxWidth: "300px",
            marginRight: "20px",
            marginLeft: "200px",
          }}
        />
        <img src={Spain} style={{ maxWidth: "300px", marginRight: "20px" }} />
        <img src={Hiking} style={{ maxWidth: "300px", marginRight: "20px" }} />
      </div>
      <div className="row align-items-center">
        <div className="row">
          <h2 style={style.headerTitle}>About Me</h2>
        </div>
        <div style={style.pFont}>
          <p>Welcome to my portfolio!</p>
          <p>
            I'm an aspiring web developer with a background in marketing and
            management. My current passion includes front-end coding and
            creating a unique user experience. I live in Dallas, TX and am
            currently undergoing the SMU coding bootcamp where I intend to
            transition careers. My hobbies include traveling to far-away places
            and becoming one with nature on my hiking adventures!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
