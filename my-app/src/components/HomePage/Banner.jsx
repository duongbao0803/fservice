import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../css/styleBanner.css";

function Banner() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fservices.azurewebsites.net/api/banners?page=home")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="banner">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade "
          data-ride="carousel"
        >
          <div className="carousel-inner w-100" style={{ maxHeight: "600px" }}>
            {data.map((service) => (
              <div className="carousel-item active">
                <img src={service.image} className="d-block w-100" alt="..." />
              </div>
            ))}
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
