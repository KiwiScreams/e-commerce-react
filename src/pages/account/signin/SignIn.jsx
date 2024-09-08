import { Link } from "react-router-dom";
import "./SignIn.css";
const SignIn = () => {
  return (
    <>
      <section className="sign-in-section">
        <div className="container">
          <h2>Sign In</h2>
          <form>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
              />
            </div>
            <p>
              By signing up, you confirm that you've read and accepted our User
              Notice and Privacy Policy.
            </p>
            <button className="login">Login</button>
            <span>
              Don't have an account? <Link to="/signup">Sign Up Now</Link>
            </span>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignIn;
