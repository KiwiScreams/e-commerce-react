import "./Nav.css";
import iconBrowse from "../../../../assets/icons/icon-browse.svg";
import { Link, NavLink } from "react-router-dom";
import iconHot from "../../../../assets/icons/header icons/icon-hot.svg.svg";
const Nav = () => {
  return (
    <>
      <section className="navigation-section">
        <div className="navigation-container">
          <button>
            <img src={iconBrowse} alt="browse icon" />
            Browse All Categories
          </button>
          <nav>
            <ul>
              <li>
                <NavLink to="/deals">
                  <img src={iconHot} alt="" />
                  Deals
                </NavLink>
              </li>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/vendors">Vendors</NavLink>
              </li>
              <li>
                <NavLink to="/menu">Mega menu</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/pages">Pages</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Nav;
