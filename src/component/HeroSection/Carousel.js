import React, { useState } from "react";
import {
  default as bg,
  default as bg2,
  default as bg3,
} from "../../assets/images/img1.png";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    const index = (activeIndex - 1 + 3) % 3; // Ensure positive index with modulo
    setActiveIndex(index);
  };

  const handleNext = () => {
    const index = (activeIndex + 1) % 3;
    setActiveIndex(index);
  };

  const carouselItems = [
    {
      bg: bg,
      text: "Home / Why work with us",
      headline: "Headline #1.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      bg: bg2,
      text: "Home / Why work with us",
      headline: "Headline #2.",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      bg: bg3,
      text: "Home / Why work with us",
      headline: "Headline #3.",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <div
                style={{
                  backgroundImage: `url(${item.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: "calc(100vh - 50px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <div className="container" style={{ padding: "20px" }}>
                  <div>
                    <p style={{ color: "#fff" }}>{item.text}</p>
                    <h1 style={{ color: "#fff" }}>{item.headline}</h1>
                    <p style={{ color: "#fff" }}>{item.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="container">
            <button
              className="btn btn-primary carousel-button"
              type="button"
              onClick={handlePrev}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              className="btn btn-primary carousel-button"
              type="button"
              onClick={handleNext}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
