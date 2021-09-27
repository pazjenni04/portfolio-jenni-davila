import React from "react";
//REACT-FONT-AWESOME FONTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Resume from "./FullStackResume.pdf";

const style = {
  linkFont: {
    fontSize: "25px",
    fontWeight: 500,
  },
  nameFont: {
    fontSize: "60px",
    fontWeight: 700,
    letterSpacing: 0.6,
  },
};

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ background: "#000301" }}
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#9A8AEC" }} />
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <Link to="/">
              <li className="nav-item active">
                <a className="nav-link" href="/" style={style.linkFont}>
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
            </Link>
            <Link to="/about">
              <li className="nav-item">
                <a className="nav-link" style={style.linkFont}>
                  About Me
                </a>
              </li>
            </Link>
            <Link to="/portfolio">
              <li className="nav-item">
                <a className="nav-link" style={style.linkFont}>
                  Portfolio
                </a>
              </li>
            </Link>
            <Link to="/contact">
              <li className="nav-item">
                <a className="nav-link" style={style.linkFont}>
                  Contact Me
                </a>
              </li>
            </Link>
            <li className="nav-item">
              <a href={Resume} className="nav-link" style={style.linkFont}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
