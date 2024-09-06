import "./Filter.css";
import { useState } from "react";

const Filter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [thumbLeft, setThumbLeft] = useState(0);
  const [thumbRight, setThumbRight] = useState(100);

  const handleMouseDown = (e, type) => {
    const slider = document.getElementById("slider");
    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;

    if (type === "left") {
      setThumbLeft(x);
      setMinPrice(Math.round((x / rect.width) * 100));
    } else {
      setThumbRight(x);
      setMaxPrice(Math.round((x / rect.width) * 100));
    }

    const handleMouseMove = (e) => {
      const x = e.clientX - rect.left;
      const threshold = 5;

      if (type === "left") {
        if (x < thumbRight && Math.abs(x - thumbLeft) > threshold) {
          setThumbLeft(x);
          setMinPrice(Math.round((x / rect.width) * 100));
        }
      } else {
        if (x > thumbLeft && Math.abs(x - thumbRight) > threshold) {
          setThumbRight(x);
          setMaxPrice(Math.round((x / rect.width) * 100));
        }
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

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
                width: "100%",
                height: "6px",
                backgroundColor: "#ccc",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: `${thumbLeft}px`,
                  height: "6px",
                  backgroundColor: "#333",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: `${thumbLeft}px`,
                  width: `${thumbRight - thumbLeft}px`,
                  height: "6px",
                  backgroundColor: "#666",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: `${thumbRight}px`,
                  width: `${100 - thumbRight}px`,
                  height: "6px",
                  backgroundColor: "#333",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: `${thumbLeft}px`,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                }}
                onMouseDown={(e) => handleMouseDown(e, "left")}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: `${thumbRight}px`,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
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
