import "./ContactForm.css";
import formImage from "../../assets/images/contact images/contact.png";
import { useState } from "react";

const ContactForm = () => {
  const [isValid, setIsValid] = useState(false);

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

  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    if (!formData.firstname.trim()) {
      newErrors.firstname = "First name is required";
      isValid = false;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }

    if (formData.subject.trim() === "") {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
      isValid = false;
    }

    if (isValid) {
      const newErrors = {};
      Object.keys(errors).forEach((key) => {
        newErrors[key] = "";
      });
      setErrors(newErrors);
    } else {
      setErrors(newErrors);
    }

    setIsValid(isValid);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    validateForm();
  };

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
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
              />
              {errors.firstname && (
                <div className="error">{errors.firstname}</div>
              )}
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="input-container">
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <div className="error">{errors.phone}</div>}
            </div>
            <div className="input-container">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <div className="error">{errors.subject}</div>}
            </div>
            <textarea
              name="message"
              id="message"
              placeholder="..."
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <div className="error">{errors.message}</div>}
            <button type="submit">Send message</button>
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
