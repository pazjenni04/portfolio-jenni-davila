import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactUs from "./Contact";
import Navbar from "./Navbar";

library.add(faLinkedin, faGithub);

const style = {
  icons: {
    color: "#9A8AEC",
    fontSize: "1.875em",
  },
};

function Footer() {
  return (
    <div>
      <footer className="contactinfo">
        <h2>Contact Me</h2>
        <p>
          Have a question or interested in working together? Feel free to reach
          out!
        </p>
        <ContactUs />
        <p>Or click on one of the icons below.</p>
        <span className="email">
          <a href="mailto: pazjenni1331@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} style={style.icons} />
          </a>
        </span>
        <span className="git-hub">
          <a href="https://github.com/pazjenni04">
            <FontAwesomeIcon icon={faGithub} style={style.icons} />
          </a>
        </span>
        <span className="linkedIn">
          <a href="https://www.linkedin.com/in/jennifer-davila-451541189/">
            <FontAwesomeIcon icon={faLinkedin} style={style.icons} />
          </a>
        </span>
      </footer>
    </div>
  );
}

export default Footer;
