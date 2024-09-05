import "./Slider.css";
import sliderImage1 from "../../assets/images/slider images/slider-1.png";
import sliderImage2 from "../../assets/images/slider images/slider-2.png";
import { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([sliderImage1, sliderImage2]);
  const [leavingIndex, setLeavingIndex] = useState(null);

  const handleNext = () => {
    setLeavingIndex(currentIndex);
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setLeavingIndex(currentIndex);
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            } ${index === leavingIndex ? "leaving" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className="carousel-controls">
        <button className="prev-button" onClick={handlePrev}>
          Prev
        </button>
        <button className="next-button" onClick={handleNext}>
          Next
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
