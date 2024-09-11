import "./SubscribeInput.css";
import SuccessPanel from "../success panel/SuccessPanel";
import { useState } from "react";
const SubscribeInput = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    setIsSubmitted(true);
    console.log("Form submitted:", email);
    setEmail("");
  };
  return (
    <>
      {isSubmitted ? (
        <SuccessPanel email={email} />
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
