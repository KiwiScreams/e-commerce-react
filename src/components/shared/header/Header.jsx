import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../../../public/logo.svg.svg";
import Search from "./search/Search";
import iconCart from "../../../assets/icons/header icons/icon-cart.svg.svg";
import iconWishlist from "../../../assets/icons/header icons/icon-heart.svg.svg";
import iconAccount from "../../../assets/icons/header icons/icon-user.svg.svg";
import iconRe from "../../../assets/icons/header icons/icon-re.svg.svg";
import Nav from "./nav/Nav";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(isLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    navigate("/signup");
  };

  const getHeaderLinks = () => {
    return [
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
        path: isLoggedIn ? "/" : "/signup",
        name: isLoggedIn ? "Logout" : "Account",
        image: iconAccount,
        onClick: isLoggedIn ? handleLogout : null,
      },
    ];
  };

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
                {isLoggedIn ? (
                  <a onClick={handleLogout}>Logout</a>
                ) : (
                  <Link to="/signup">My Account</Link>
                )}
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
            <img src={logo} alt="Nest" className="logo" />
            <Search />
            <ul>
              {getHeaderLinks().map((link, index) => (
                <li key={index} className="nav">
                  {link.onClick ? (
                    <a onClick={link.onClick}>
                      {link.name !== "Logout" && link.name !== "Account" ? (
                        <div className="quantity">
                          <span>0</span>
                        </div>
                      ) : null}
                      <img src={link.image} alt="" />
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path}>
                      {link.name !== "Logout" && link.name !== "Account" ? (
                        <div className="quantity">
                          <span>0</span>
                        </div>
                      ) : null}
                      <img src={link.image} alt="" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Nav />
      </header>
    </>
  );
};

export default Header;
