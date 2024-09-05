import "./Service.css";
import iconService1 from "../../assets/images/about images/icon-1.svg fill.svg";
import iconService2 from "../../assets/images/about images/icon-2.svg fill.svg";
import iconService3 from "../../assets/images/about images/icon-3.svg fill.svg";
import iconService4 from "../../assets/images/about images/icon-4.svg fill.svg";
import iconService5 from "../../assets/images/about images/icon-5.svg fill.svg";
import iconService6 from "../../assets/images/about images/icon-6.svg.svg";
import { Link } from "react-router-dom";
const services = [
  {
    id: 1,
    image: iconService1,
    title: "Best Prices & Offers",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    id: 2,
    image: iconService2,
    title: "Wide Assortment",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    id: 3,
    image: iconService3,
    title: "Free Delivery",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    id: 4,
    image: iconService4,
    title: "Easy Returns",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    id: 5,
    image: iconService5,
    title: "100% Satisfaction",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    id: 6,
    image: iconService6,
    title: "Great Daily Deal",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
];
const Service = () => {
  return (
    <>
      <section className="services-section">
        <h2>What We Provide?</h2>
        <div className="services-container">
          {services.map((service) => (
            <div key={service.id} className="service">
              <img src={service.image} alt="" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link>Read more</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Service;
