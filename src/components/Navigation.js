import React from "react";
//REACT-FONT-AWESOME FONTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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

const Navigation = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ background: "#000301" }}
    >
      <div className="container">
        <a
          className="navbar-brand align-items-start"
          href="#"
          style={style.nameFont}
          id="home"
        >
          Jennifer Davila
        </a>
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home" style={style.linkFont}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={style.linkFont}>
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={style.linkFont}>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" style={style.linkFont}>
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
