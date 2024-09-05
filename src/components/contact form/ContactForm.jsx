import "./ContactForm.css";
const ContactForm = () => {
  return (
    <>
      <section className="contact-form-section">
        <form>
          <span className="green-txt">Contact form</span>
          <h2>Drop Us a Line</h2>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="input-container">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="input-container">
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Your Phone"
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Your Subject"
            />
          </div>
          <textarea name="message" id="message"></textarea>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
