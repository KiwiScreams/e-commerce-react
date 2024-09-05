import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <div className="header-top">
          <div className="header-top-container">
            <ul className="header-top-nav">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/">My Account</Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/wishlist">Order Tracking</Link>
              </li>
            </ul>
            <p>100% Secure delivery without contacting the courier</p>
            <ul className="header-top-nav">
              <li>
                Need help? Call Us:<span className="green-txt">+ 1800 900</span>
              </li>
              <li>English</li>
              <li>USD</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
