import React from "react";
import { Spring } from "react-spring";
import Thailand from "../../images/Thailand.png";
import Hiking from "../../images/Hiking.jpg";
import Spain from "../../images/Spain-fountain.jpg";

const style = {
  title: {
    fontSize: "70px",
  },
};

function About() {
  return (
    <div>
      <div className="about-container">
        <h2 className="about-title" style={style.title}>
          A little about me....
        </h2>
        <div className="pic-container">
          <Spring
            from={{ opacity: 0, margin: -500 }}
            to={{ opacity: 1, margin: 0 }}
          >
            {(props) => (
              <div style={props}>
                <img src={Thailand} className="pics" />
              </div>
            )}
          </Spring>
          <Spring
            from={{ opacity: 0, margin: -500 }}
            to={{ opacity: 1, margin: 0 }}
          >
            {(props) => (
              <div style={props}>
                <img src={Hiking} className="pics" />
              </div>
            )}
          </Spring>
          <Spring
            from={{ opacity: 0, margin: -500 }}
            to={{ opacity: 1, margin: 0 }}
          >
            {(props) => (
              <div style={props}>
                <img src={Spain} className="pics" />
              </div>
            )}
          </Spring>
        </div>
        <p>
          I'm an aspiring web developer with a background in marketing and
          management. My current passion includes front-end coding and creating
          a unique user experience. I live in Dallas, TX and am currently
          undergoing the SMU coding bootcamp where I intend to transition
          careers. My hobbies include traveling to far-away places and becoming
          one with nature on my hiking adventures!
        </p>
      </div>
    </div>
  );
}

export default About;
