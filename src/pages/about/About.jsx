import "./About.css";
import aboutImage1 from "../../assets/images/about images/about-1.png.png";
import aboutImage2 from "../../assets/images/about images/about-2.png.png";
import aboutImage3 from "../../assets/images/about images/about-3.png.png";
import aboutImage4 from "../../assets/images/about images/about-4.png.png";
import { useState, useEffect } from "react";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [aboutImage1, aboutImage2, aboutImage3, aboutImage4];
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <section className="about-section">
        <div className="image-container">
          <img src={aboutImage1} alt="" />
        </div>
        <div className="text-container">
          <h2>Welcome to Nest</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>
          <p>
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
            et Ut placerat legendos interpre.Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis
            commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
            ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate id
            est laborum.
          </p>
          <div className="slider">
            {images
              .concat(images.slice(0, 3))
              .slice(currentIndex, currentIndex + 3)
              .map((image, index) => (
                <img src={image} alt="" key={index} />
              ))}
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
