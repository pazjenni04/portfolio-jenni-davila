import React from "react";
import Thailand from "../Thailand.png";
import Hike from "../IMG_0004.jpg";
import something from "../IMG_3592.jpg";

const style = {
  picSize: {
    maxWidth: "30rem",
  },
};

function Header() {
  return (
    <div className="container">
      <h2 className="row align-items-center">About Me</h2>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner w-50">
          <div class="carousel-item active">
            <img
              src={Thailand}
              class="d-block w-100"
              alt="..."
              style={style.picSize}
            />
          </div>
          <div class="carousel-item">
            <img
              src={Hike}
              class="d-block w-100"
              alt="..."
              style={style.picSize}
            />
          </div>
          <div class="carousel-item">
            <img
              src={something}
              class="d-block w-100"
              alt="..."
              style={style.picSize}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
