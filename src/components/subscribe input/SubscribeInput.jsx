import "./SubscribeInput.css";
import SuccessPanel from "../success panel/SuccessPanel";
import { useState } from "react";

const SubscribeInput = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
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
    setSubmittedEmail(email);
    setEmail("");
    setIsSubmitted(true);
    console.log("Form submitted:", email);
  };

  return (
    <>
      <div className="input-container-subscire">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={handleInputChange}
          className={error ? "invalid-input" : ""}
        />
        <button onClick={handleFormSubmit}>Subscribe</button>
        {error && <div className="error-message">{error}</div>}
      </div>
      {isSubmitted ? <SuccessPanel email={submittedEmail} /> : null}
    </>
  );
};

export default SubscribeInput;
