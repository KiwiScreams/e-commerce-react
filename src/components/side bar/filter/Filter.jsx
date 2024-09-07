import "./Filter.css";
import { useState } from "react";
import filterIcon from "../../../assets/icons/filter.svg";
const Filter = () => {
  const checkboxData = [
    {
      category: "Color",
      options: [
        { name: "red", label: "Red", count: 0 },
        { name: "green", label: "Green", count: 0 },
        { name: "blue", label: "Blue", count: 0 },
      ],
    },
    {
      category: "Item Condition",
      options: [
        { name: "new", label: "New", count: 0 },
        { name: "refurbished", label: "Refurbished", count: 0 },
        { name: "used", label: "Used", count: 0 },
      ],
    },
  ];
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
      <div className="price-range">
        <div
          id="slider"
          style={{
            position: "relative",
            maxWidth: "236px",
            height: "6px",
            backgroundColor: "#D6D7D9",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${thumbLeft}px`,
              maxWidth: "236px",
              height: "6px",
              backgroundColor: "#3BB77E",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: `${thumbLeft}px`,
              width: `${Math.min(thumbRight - thumbLeft, 236 - thumbLeft)}px`,
              height: "6px",
              backgroundColor: "#3BB77E",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: `${thumbRight}px`,
              width: `${Math.min(236 - thumbRight, 236 - thumbRight)}px`,
              height: "6px",
              backgroundColor: "#D6D7D9",
            }}
          />
          <div
            className="thumb left-thumb"
            style={{
              position: "absolute",
              top: "-5px",
              left: `${thumbLeft}px`,
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              backgroundColor: "#3BB77E",
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
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              backgroundColor: "#3BB77E",
              cursor: "pointer",
            }}
            onMouseDown={(e) => handleMouseDown(e, "right")}
          />
        </div>
        <div className="flex">
          <output style={{ display: "block", fontSize: "16px" }}>
            From: <span className="green-txt"> ${minPrice}</span>
          </output>
          <output style={{ display: "block", fontSize: "16px" }}>
            To: <span className="green-txt"> ${maxPrice}</span>
          </output>
        </div>
      </div>
      <div className="filter-check-container">
        {checkboxData.map((category) => (
          <div key={category.category} className="check-box">
            <h6>{category.category}</h6>
            {category.options.map((option) => (
              <div key={option.name} className="checkbox-container">
                <input type="checkbox" name={option.name} id={option.name} />
                <label htmlFor={option.name}>
                  {option.label} ({option.count})
                </label>
              </div>
            ))}
          </div>
        ))}
        <button><img src={filterIcon} alt="" />Filter</button>
      </div>
    </section>
  );
};

export default Filter;
