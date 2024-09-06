import "./Filter.css";
import { useState } from "react";

const Filter = () => {
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [thumbLeft, setThumbLeft] = useState(0);
  const [thumbRight, setThumbRight] = useState(100);

  const handleMouseDown = (e, type) => {
    const slider = document.getElementById("slider");
    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;

    let isDragging = false;

    const handleMouseMove = (e) => {
      if (isDragging) {
        const x = e.clientX - rect.left;
        const threshold = 5;

        if (type === "left") {
          const newX = Math.max(0, Math.min(x, thumbRight));
          if (Math.abs(newX - thumbLeft) > threshold) {
            setThumbLeft(newX);
            setMinPrice(Math.round((newX / rect.width) * 1000));
          }
        } else {
          const newX = Math.max(thumbLeft, Math.min(x, rect.width));
          if (Math.abs(newX - thumbRight) > threshold) {
            setThumbRight(newX);
            setMaxPrice(Math.round((newX / rect.width) * 1000));
          }
        }
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    isDragging = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <section className="filter-section">
      <h2>Filter by price</h2>
      <ul>
        <li className="category-li">
          <div className="image-container">
            {/* <img src={category.image} alt="" /> */}
          </div>
          <div className="price-range">
            <div
              id="slider"
              style={{
                position: "relative",
                maxWidth: "200px",
                height: "6px",
                backgroundColor: "#ccc", // Change to gray
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: `${thumbLeft}px`,
                  maxWidth: "200px",
                  height: "6px",
                  backgroundColor: "#ccc", // Change to gray
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: `${thumbLeft}px`,
                  width: `${Math.min(
                    thumbRight - thumbLeft,
                    200 - thumbLeft
                  )}px`, // Add this line
                  height: "6px",
                  backgroundColor: "#ccc", // Change to gray
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: `${thumbRight}px`,
                  width: `${Math.min(200 - thumbRight, 200 - thumbRight)}px`, // Update width calculation
                  height: "6px",
                  backgroundColor: "#ccc", // Change to gray
                }}
              />
              <div
                className="thumb left-thumb"
                style={{
                  position: "absolute",
                  top: "-5px",
                  left: `${thumbLeft}px`,
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#34C759", // Change to green
                  cursor: "pointer",
                }}
                onMouseDown={(e) => handleMouseDown(e, "left")}
              />
              <div
                className="thumb right-thumb"
                style={{
                  position: "absolute",
                  top: "-5px",
                  left: `${thumbRight}px`,
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#34C759", // Change to green
                  cursor: "pointer",
                }}
                onMouseDown={(e) => handleMouseDown(e, "right")}
              />
            </div>
            <output style={{ display: "block", fontSize: "16px" }}>
              Min price: ${minPrice}
            </output>
            <output style={{ display: "block", fontSize: "16px" }}>
              Max price: ${maxPrice}
            </output>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Filter;
