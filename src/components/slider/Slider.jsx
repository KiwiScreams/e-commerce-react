import "./Slider.css";
import sliderImage1 from "../../assets/images/slider images/slider-1.png";
import sliderImage2 from "../../assets/images/slider images/slider-2.png";
import { useState, useEffect } from "react";
import arrowLeft from "../../assets/icons/shared/arrow-left.svg";
import arrowRight from "../../assets/icons/shared/arrow-right.svg";
import SubscribeInput from "../subscribe input/SubscribeInput";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    {
      image: sliderImage1,
      title: "Don't miss amazing grocery deals",
      description: "Sign up for the daily newsletter",
    },
    {
      image: sliderImage2,
      title: "Fresh Vegetables Big discount",
      description: "Save up to 50% off on your first order",
    },
  ]);
  const [leavingIndex, setLeavingIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setLeavingIndex(currentIndex);
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setLeavingIndex(currentIndex);
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    let intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        handleNext();
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [currentIndex, images, isHovered, handleNext]);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="carousel-container"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            } ${index === leavingIndex ? "leaving" : ""}`}
          >
            <div
              className="carousel-image"
              style={{ backgroundImage: `url(${image.image})` }}
            />
            <div className="carousel-content">
              <h2>{image.title}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <SubscribeInput />
      <div className="carousel-controls">
        <button className="prev-button" onClick={handlePrev}>
          <img src={arrowLeft} alt="" />
        </button>
        <button className="next-button" onClick={handleNext}>
          <img src={arrowRight} alt="" />
        </button>
      </div>
      <div className="carousel-indicators">
        {images.map((image, index) => (
          <button
            key={index}
            className={`indicator-button ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
