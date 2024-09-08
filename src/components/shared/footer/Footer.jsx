import "./Footer.css";
import appStore from "../../../assets/icons/footer icons/app-store.jpg.svg";
import googlePlay from "../../../assets/icons/footer icons/google-play.jpg.svg";
import logo from "../../../../public/logo.svg.svg";
import iconLocation from "../../../assets/icons/footer icons/icon-location.svg.svg";
import iconHeadphone from "../../../assets/icons/footer icons/icon-contact.svg.svg";
import iconEmail from "../../../assets/icons/footer icons/icon-email.svg.svg";
import iconClock from "../../../assets/icons/footer icons/icon-clock.svg.svg";
import { NavLink, useLocation } from "react-router-dom";
import FooterBottom from "./footer bottom/FooterBottom";
const footerContacts = [
  {
    id: 1,
    image: iconLocation,
    title: "Address: ",
    description: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
  },
  {
    id: 2,
    image: iconHeadphone,
    title: "Call Us: ",
    description: "(+91) - 540-025-124553",
  },
  {
    id: 3,
    image: iconEmail,
    title: "Email: ",
    description: "sale@Nest.com",
  },
  {
    id: 4,
    image: iconClock,
    title: "Hours: ",
    description: "10:00 - 18:00, Mon - Sat",
  },
];
const ulColumn = [
  [
    { text: "Company" },
    { text: "About Us", href: "/about" },
    { text: "Delivery Information", href: "/notfound" },
    { text: "Privacy Policy", href: "/notfound" },
    { text: "Terms & Conditions", href: "/notfound" },
    { text: "Contact Us", href: "/contact" },
    { text: "Support Center", href: "/notfound" },
    { text: "Careers", href: "/notfound" },
  ],
  [
    { text: "Account" },
    { text: "Sign In", href: "/about" },
    { text: "View Cart", href: "/notfound" },
    { text: "My Wishlist", href: "/notfound" },
    { text: "Track My Order", href: "/notfound" },
    { text: "Help Ticket", href: "/contact" },
    { text: "Shipping Details", href: "/notfound" },
    { text: "Compare products", href: "/notfound" },
  ],
  [
    { text: "Corporate" },
    { text: "Become a Vendor", href: "/about" },
    { text: "Affiliate Program", href: "/notfound" },
    { text: "Farm Business", href: "/notfound" },
    { text: "Farm Careers", href: "/notfound" },
    { text: "Our Suppliers", href: "/contact" },
    { text: "Accessibility", href: "/notfound" },
    { text: "Promotions", href: "/notfound" },
  ],
  [
    { text: "Popular" },
    { text: "Milk & Flavoured Milk", href: "/about" },
    { text: "Butter and Margarine", href: "/notfound" },
    { text: "Eggs Substitutes", href: "/notfound" },
    { text: "Marmalades", href: "/notfound" },
    { text: "Sour Cream and Dips", href: "/contact" },
    { text: "Tea & Kombucha", href: "/notfound" },
    { text: "Cheese", href: "/notfound" },
  ],
];

const Footer = () => {
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";
  if (isAdminPage) return null;
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="footer-left-container">
            <img src={logo} alt="" className="logo" />
            <p className="under-logo">Awesome grocery store website template</p>
            <ul>
              {footerContacts.map((footerContact) => (
                <li key={footerContact.id}>
                  <img src={footerContact.image} alt="" />
                  <p>
                    <span>{footerContact.title}</span>
                    {footerContact.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-center-container">
            {ulColumn.map((list, index) => (
              <ul key={index}>
                {list.map((item, index) => (
                  <li key={index}>
                    {item.href ? (
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active-link" : ""
                        }
                        to={item.href}
                      >
                        {item.text}
                      </NavLink>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="footer-right-container">
            <ul>
              <li>Install App</li>
              <li>
                <a href="#">
                  <img src={appStore} alt="" />
                </a>
                <a
                  href="#"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  <img src={googlePlay} alt="" />
                </a>
              </li>
              <li style={{ marginTop: "40px" }}>Secured Payment Gateways</li>
            </ul>
          </div>
        </div>
        <FooterBottom />
      </footer>
    </>
  );
};

export default Footer;
