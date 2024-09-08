import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { useState, useEffect } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        console.log("Sign in successful");
        navigate("/");
      } else {
        setLoginError("Invalid email or password");
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
      <section className="sign-in-section">
        <div className="container">
          <h2>Sign In</h2>
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
            {loginError && <p className="error">{loginError}</p>} 
            <p>
              By signing up, you confirm that you've read and accepted our User
              Notice and Privacy Policy.
            </p>
            <button className="login" type="submit">
              Login
            </button>
            <span>
              Don't have an account?
              <Link to="/signup" className="green-txt">
                Sign Up Now
              </Link>
            </span>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignIn;
