import "./SignUp.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <section className="sign-up-section">
        <div className="container">
          <h2>Create an Account</h2>
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
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Your Phone"
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
              Already have an account? <Link to="/signin" className="green-txt">Sign In Now</Link>
            </span>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
