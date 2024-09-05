import "./Nav.css";
import iconBrowse from "../../../../assets/icons/icon-browse.svg";
import { Link, NavLink } from "react-router-dom";
import iconHot from "../../../../assets/icons/header icons/icon-hot.svg.svg";
import iconHeadphone from "../../../../assets/icons/header icons/icon-headphone.svg.svg";
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
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    {link.icon && <img src={link.icon} alt="" />}
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="support-center">
            <img src={iconHeadphone} alt="" />
            <div>
                <span>1900 - 888</span>
                <span>24/7 Support Center</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;
