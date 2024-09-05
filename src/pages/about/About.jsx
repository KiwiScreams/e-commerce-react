import "./About.css";
import aboutImage1 from "../../assets/images/about images/about-1.png.png";
import aboutImage2 from "../../assets/images/about images/about-2.png.png";
import aboutImage3 from "../../assets/images/about images/about-3.png.png";
import aboutImage4 from "../../assets/images/about images/about-4.png.png";
import arrowLeft from "../../assets/icons/shared/arrow-left.svg";
import arrowRight from "../../assets/icons/shared/arrow-right.svg";
import { useState, useEffect } from "react";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [aboutImage2, aboutImage3, aboutImage4];
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
            <button onClick={handlePrev}>
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4775 4.8364H3.4775L6.7575 1.5564L5.3175 0.196397L0.9975 4.4364C0.624167 4.86306 0.4375 5.34306 0.4375 5.8764C0.4375 6.40973 0.624167 6.88973 0.9975 7.3164L5.3175 11.5564L6.7575 10.1964L3.4775 6.8364H13.4775V4.8364Z"
                  fill="#3BB77E"
                />
              </svg>
            </button>
            {images
              .concat(images.slice(0, 3))
              .slice(currentIndex, currentIndex + 3)
              .map((image, index) => (
                <img src={image} alt="" key={index} />
              ))}

            <button onClick={handleNext}>
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8375 4.4364L8.5175 0.196397L7.0775 1.5564L10.4375 4.8364H0.4375V6.8364H10.4375L7.0775 10.1964L8.5175 11.5564L12.8375 7.3164C13.2108 6.88973 13.3975 6.40973 13.3975 5.8764C13.3975 5.34306 13.2108 4.86306 12.8375 4.4364Z"
                  fill="#3BB77E"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
