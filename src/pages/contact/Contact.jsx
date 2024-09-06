import ContactForm from "../../components/contact form/ContactForm";
import SubscribePanel from "../../components/subscribe panel/SubscribePanel";
import iconLocation from "../../assets/icons/header icons/icon-location.svg.svg";
import "./Contact.css";
const articles = [
  {
    id: 1,
    title: "01. feedback",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    color: "#253D4E",
  },
  {
    id: 2,
    title: "02. Employer Services",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    color: "#253D4E",
  },
  {
    id: 3,
    title: "03. Billing Inquiries",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    color: "#3BB77E",
  },
  {
    id: 4,
    title: "04.General Inquiries",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    color: "#253D4E",
  },
];
const maps = [
  {
    id: 1,
    title: "Office",
    text: "205 North Michigan Avenue, Suite 810",
    location: "Chicago, 60601, USA",
    phone: "Phone: (123) 456-7890",
    email: "Email: contact@Evara.com",
  },
  {
    id: 2,
    title: "Studio",
    text: "205 North Michigan Avenue, Suite 810",
    location: "Chicago, 60601, USA",
    phone: "Phone: (123) 456-7890",
    email: "Email: contact@Evara.com",
  },
  {
    id: 2,
    title: "Shop",
    text: "205 North Michigan Avenue, Suite 810",
    location: "Chicago, 60601, USA",
    phone: "Phone: (123) 456-7890",
    email: "Email: contact@Evara.com",
  },
];
const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <span className="green-txt">How can help you ?</span>
        <div className="container">
          <div className="article">
            <h2>Let us know how we can help you</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="articles-container">
            {articles.map((article) => (
              <div key={article.id} className="article-content">
                <h4 style={{ color: article.color }}>{article.title}</h4>
                <p>{article.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="maps-container">
          {maps.map((map) => (
            <div key={map.id} className="map">
              <h3>{map.title}</h3>
              <p>{map.text}</p>
              <p>{map.location}</p>
              <p>{map.phone}</p>
              <p>{map.email}</p>
              <button>
                <svg
                  width="15"
                  height="36"
                  viewBox="0 0 15 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6511_60)">
                    <path
                      d="M6.20813 24.7865L5.78813 24.4598C4.76146 23.5887 3.78146 22.6087 2.84812 21.5198C1.16813 19.5598 0.328125 17.9265 0.328125 16.6198C0.328125 15.5621 0.592569 14.5821 1.12146 13.6798C1.65035 12.7776 2.3659 12.0621 3.26813 11.5332C4.17035 11.0043 5.15035 10.7398 6.20813 10.7398C7.2659 10.7398 8.2459 11.0043 9.14812 11.5332C10.0503 12.0621 10.7659 12.7776 11.2948 13.6798C11.8237 14.5821 12.0881 15.5621 12.0881 16.6198C12.0881 17.9265 11.2481 19.5598 9.56812 21.5198C8.6659 22.5776 7.6859 23.5576 6.62813 24.4598L6.20813 24.7865ZM6.20813 11.9998C5.36812 11.9998 4.59812 12.2098 3.89812 12.6298C3.19813 13.0498 2.63812 13.6098 2.21812 14.3098C1.79813 15.0098 1.58812 15.7876 1.58812 16.6432C1.58812 17.4987 2.16368 18.6421 3.31479 20.0732C4.12368 21.0998 5.08813 22.1109 6.20813 23.1065C7.32812 22.1109 8.29257 21.0998 9.10146 20.0732C10.2526 18.6421 10.8281 17.4987 10.8281 16.6432C10.8281 15.7876 10.6181 15.0098 10.1981 14.3098C9.77812 13.6098 9.21813 13.0498 8.51812 12.6298C7.81813 12.2098 7.04813 11.9998 6.20813 11.9998ZM6.20813 18.9532C5.55479 18.9532 5.00257 18.7276 4.55146 18.2765C4.10035 17.8254 3.87479 17.2732 3.87479 16.6198C3.87479 15.9665 4.10035 15.4143 4.55146 14.9632C5.00257 14.5121 5.55479 14.2865 6.20813 14.2865C6.86146 14.2865 7.41368 14.5121 7.86479 14.9632C8.3159 15.4143 8.54146 15.9665 8.54146 16.6198C8.54146 17.2732 8.3159 17.8254 7.86479 18.2765C7.41368 18.7276 6.86146 18.9532 6.20813 18.9532ZM6.20813 15.4532C5.89701 15.4532 5.62479 15.5698 5.39146 15.8032C5.15812 16.0365 5.04146 16.3087 5.04146 16.6198C5.04146 16.9309 5.15812 17.2032 5.39146 17.4365C5.62479 17.6698 5.89701 17.7865 6.20813 17.7865C6.51924 17.7865 6.79146 17.6698 7.02479 17.4365C7.25812 17.2032 7.37479 16.9309 7.37479 16.6198C7.37479 16.3087 7.25812 16.0365 7.02479 15.8032C6.79146 15.5698 6.51924 15.4532 6.20813 15.4532Z"
                      fill="#fff"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6511_60">
                      <rect
                        width="14"
                        height="35"
                        fill="white"
                        transform="matrix(1 0 0 -1 0.328125 35.2865)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                View map
              </button>
            </div>
          ))}
        </div>
        <ContactForm />
      </section>
      <SubscribePanel />
    </>
  );
};

export default Contact;
