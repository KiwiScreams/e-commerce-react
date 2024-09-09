import "./ContactForm.css";
import formImage from "../../assets/images/contact images/contact.png";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  return (
    <>
      <section className="contact-form-section">
        <div className="form-container">
          <span className="green-txt">Contact form</span>
          <h2>Drop Us a Line</h2>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form>
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
            <textarea name="message" id="message" placeholder="..."></textarea>
            <button>Send message</button>
          </form>
        </div>
        <div className="image-container">
          <img src={formImage} alt="contact form image" />
        </div>
      </section>
    </>
  );
};

export default ContactForm;
