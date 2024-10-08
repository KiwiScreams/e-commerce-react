import { Link, Navigate, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const adminEmail = "admin@gmail.com";
  const adminPassword = "1111-2222";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit called");
    const isValid = validateForm();
    if (isValid) {
      if (email === adminEmail && password === adminPassword) {
        console.log("Admin credentials entered");
        fetch("http://localhost:8000/users")
          .then((response) => response.json())
          .then((data) => {
            console.log("Users data:", data);
            const existingUser = data.find((user) => user.email === email);
            console.log("Existing user:", existingUser);
            if (existingUser && existingUser.role === "admin") {
              console.log("Admin user found");
              navigate("/admin/products");
            } else {
              console.log("Admin user not found or not authorized");
            }
          })
          .catch((error) => console.error(error));
      } else {
        console.log("Sign in successful");
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (phone.length < 10) {
      setPhoneError("Phone number must be at least 10 digits long");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  return (
    <>
      <section className="sign-up-section">
        <div className="container">
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="error">{emailError}</p>}
            </div>
            <div className="input-container">
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {phoneError && <p className="error">{phoneError}</p>}
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="error">{passwordError}</p>}
            </div>
            <p>
              By signing up, you confirm that you've read and accepted our User
              Notice and Privacy Policy.
            </p>
            <button className="login" type="submit">
              Sign Up
            </button>
            <span>
              Already have an account?
              <Link to="/signin" className="green-txt">
                Sign In Now
              </Link>
            </span>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
