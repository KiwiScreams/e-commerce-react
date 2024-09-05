import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../../../public/logo.svg.svg";
import Search from "./search/Search";
import iconCart from "../../../assets/icons/header icons/icon-cart.svg.svg";
import iconWishlist from "../../../assets/icons/header icons/icon-heart.svg.svg";
import iconAccount from "../../../assets/icons/header icons/icon-user.svg.svg";
import iconRe from "../../../assets/icons/header icons/icon-re.svg.svg";
const headerLinks = [
  {
    path: "/compare",
    name: "Compare",
    image: iconRe,
    quantity: 0,
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    image: iconWishlist,
    quantity: 0,
  },
  {
    path: "/cart",
    name: "Cart",
    image: iconCart,
    quantity: 0,
  },
  {
    path: "/account",
    name: "Account",
    image: iconAccount,
  },
];
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
        <div className="header-middle">
          <div className="header-middle-container">
            <img src={logo} alt="Nest" />
            <Search />
            <ul>
              {headerLinks.map((link, index) => (
                <li key={index} className="nav">
                  {
                    <Link to={link.path}>
                      <div className="quantity">
                        <span>0</span>
                      </div>
                      <img src={link.image} alt="" />
                      {link.name}
                    </Link>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
