import "./Footer.css";
import appStore from "../../../assets/icons/footer icons/app-store.jpg.svg";
import googlePlay from "../../../assets/icons/footer icons/google-play.jpg.svg";
import logo from "../../../../public/logo.svg.svg";
import iconLocation from "../../../assets/icons/footer icons/icon-location.svg.svg";
import iconHeadphone from "../../../assets/icons/footer icons/icon-contact.svg.svg";
import iconEmail from "../../../assets/icons/footer icons/icon-email.svg.svg";
import iconClock from "../../../assets/icons/footer icons/icon-clock.svg.svg";
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
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="footer-container">
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
        </div>
      </footer>
    </>
  );
};

export default Footer;
