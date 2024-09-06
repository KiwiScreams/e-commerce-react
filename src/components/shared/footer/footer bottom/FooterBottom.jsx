import "./FooterBottom.css";
import iconPhone from "../../../../assets/icons/footer icons/phone-call.svg fill.svg";
import facebook from "../../../../assets/icons/footer icons/icon-facebook-white.svg.svg";
import twitter from "../../../../assets/icons/footer icons/icon-twitter-white.svg.svg";
import instagram from "../../../../assets/icons/footer icons/icon-instagram-white.svg.svg";
import pinterest from "../../../../assets/icons/footer icons/icon-pinterest-white.svg.svg";
import youtube from "../../../../assets/icons/footer icons/icon-youtube-white.svg.svg";
const socialMedia = [
  { id: 1, src: facebook, href: "#" },
  { id: 2, src: twitter,  href: "#" },
  { id: 3, src: instagram, href: "#" },
  { id: 4, src: pinterest, href: "#" },
  { id: 5, src: youtube, href: "#" },
];
const FooterBottom = () => {
  return (
    <>
      <section className="footer-bottom-container flex">
        <div>
          <p>
            © 2022, <span className="green-txt">Nest</span> - HTML Ecommerce
            Template
          </p>
          <p>All rights reserved</p>
        </div>
        <div className="flex" style={{ gap: "50px" }}>
          <div className="support-center">
            <img src={iconPhone} alt="" />
            <div>
              <span>1900 - 6666</span>
              <span>Working 8:00 - 22:00</span>
            </div>
          </div>
          <div className="support-center">
            <img src={iconPhone} alt="" />
            <div>
              <span>1900 - 8888</span>
              <span>24/7 Support Center</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex" style={{ gap: "5px" }}>
            <h6>Follow Us</h6>
            {socialMedia.map((media) => (
              <div key={media.id}>
                <a href={media.href}>
                  <img src={media.src} />
                </a>
              </div>
            ))}
          </div>
          <p>Up to 15% discount on your first subscribe</p>
        </div>
      </section>
    </>
  );
};

export default FooterBottom;
