import "./Footer.css";
import appStore from "../../../assets/icons/footer icons/app-store.jpg.svg";
import googlePlay from "../../../assets/icons/footer icons/google-play.jpg.svg";
import logo from "../../../../public/logo.svg.svg";
import iconLocation from "../../../assets/icons/footer icons/icon-location.svg.svg";
import iconHeadphone from "../../../assets/icons/footer icons/icon-contact.svg.svg";
import iconEmail from "../../../assets/icons/footer icons/icon-email.svg.svg";
import iconClock from "../../../assets/icons/footer icons/icon-clock.svg.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="footer-container">
            <img src={logo} alt="" className="logo"/>
            <p className="under-logo">Awesome grocery store website template</p>
            <ul>
              <li>
                <img src={iconLocation} alt="" />
                <p>
                  <span>Address:</span> 5171 W Campbell Ave undefined Kent, Utah
                  53127 United States
                </p>
              </li>
              <li>
                <img src={iconHeadphone} alt="" />
                Call Us:(+91) - 540-025-124553
              </li>
              <li>
                <img src={iconEmail} alt="" />
                Email:sale@Nest.com
              </li>
              <li>
                <img src={iconClock} alt="" />
                Hours:10:00 - 18:00, Mon - Sat
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
