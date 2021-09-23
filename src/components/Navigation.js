import React from "react";

const style = {
  linkFont: {
    font: "50rem",
    fontWeight: 500,
  },
  nameFont: {
    font: "100rem",
    fontWeight: 700,
    letterSpacing: 0.6,
  },
};

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#" style={style.nameFont} id="home">
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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto align-self-end">
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
