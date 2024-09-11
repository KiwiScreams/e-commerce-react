import "./SubscribeInput.css";
import { useState } from "react";
import SuccessPanel from "./SuccessPanel"; // Import the SuccessPanel component

const SubscribeInput = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // New state variable to track form submission

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    if (!inputValue.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (error) {
      return;
    }
    setIsSubmitted(true); // Set isSubmitted to true when form is submitted
    console.log("Form submitted:", email);
    setEmail("");
  };

  return (
    <>
      {isSubmitted ? (
        <SuccessPanel email={email} /> // Render SuccessPanel when form is submitted
      ) : (
        <div className="input-container-subscire">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={handleInputChange}
            className={error ? "invalid-input" : ""}
          />
          {error && <div className="error-message">{error}</div>}
          <button onClick={handleFormSubmit}>Subscribe</button>
        </div>
      )}
    </>
  );
};

export default SubscribeInput;
