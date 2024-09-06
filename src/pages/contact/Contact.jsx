import ContactForm from "../../components/contact form/ContactForm";
import SubscribePanel from "../../components/subscribe panel/SubscribePanel";
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
                <h4 style={{color: article.color}}>{article.title}</h4>
                <p>{article.text}</p>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </section>
      <SubscribePanel />
    </>
  );
};

export default Contact;
