import axios from "axios";
import React, { useState, useEffect } from "react";

function Banner() {
  return (
    <>
      <div className="banner-dynamic">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade "
          data-ride="carousel"
        >
          <div className="carousel-inner w-100" style={{ maxHeight: "600px" }}>
            <div className="carousel-item active">
              <img
                src={require("../../img/vệ sinh theo giờ.jpg")}
                className="d-block w-100"
                alt="..."
              />
            </div>

            <a
              className="carousel-control-prev"
              href="#carouselExampleFade"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleFade"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
