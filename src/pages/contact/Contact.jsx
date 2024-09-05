import "./Contact.css";
const articles = [
  {
    id: 1,
    title: "01. feedback",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 2,
    title: "02. Employer Services",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 3,
    title: "03. Billing Inquiries",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 4,
    title: "04.General Inquiries",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
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
                <h4>{article.title}</h4>
                <p>{article.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
