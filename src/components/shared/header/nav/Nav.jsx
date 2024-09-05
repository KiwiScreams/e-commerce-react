import "./Nav.css";
import iconBrowse from "../../../../assets/icons/icon-browse.svg";
import { Link, NavLink } from "react-router-dom";
import iconHot from "../../../../assets/icons/header icons/icon-hot.svg.svg";
const navLinks = [
  { to: "/deals", icon: iconHot, label: "Deals" },
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/shop", label: "Shop" },
  { to: "/vendors", label: "Vendors" },
  { to: "/menu", label: "Mega menu" },
  { to: "/blog", label: "Blog" },
  { to: "/pages", label: "Pages" },
  { to: "/contact", label: "Contact" },
];
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
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to}>
                    {link.icon && <img src={link.icon} alt="" />}
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Nav;
