import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/slider.css";

function Slider({ slides }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      {slides.map((slide) => (
        <Carousel.Item
          key={slide.image}
          interval={slide.interval}
          style={{ position: "relative", maxWidth: "100%" }}
        >
          <img
            className="d-block w-100"
            src={slide.image}
            alt="First slide"
            style={{ height: "650px", objectFit: "cover" }}
          />
          <Carousel.Caption
            style={{
              position: "absolute",
              bottom: 0,
              left: "56%",
              width: "60%",
              transform: "translate(-60%, 0)",
            }}
          >
            <h1>{slide.title}</h1>
            <p style={{ fontSize: "16px" }}>{slide.subTitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
