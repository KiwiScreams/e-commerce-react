import "./AboutUs.css";
import aboutImage5 from "../../assets/images/about images/about-5.png.png";
const aboutUs = [
  {
    id: 1,
    title: "Who we are",
    description:
      "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec acodio orci ultrices in.",
  },
  {
    id: 2,
    title: "Our history",
    description:
      "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec acodio orci ultrices in.",
  },
  {
    id: 3,
    title: "Our mission",
    description:
      "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec acodio orci ultrices in.",
  },
];
const AboutUs = () => {
  return (
    <>
      <section className="about-middle-container about-top-container">
        <div className="image-container">
          <img src={aboutImage5} alt="" />
        </div>
        <div className="text-container">
          <h4>Our performance</h4>
          <h2>Your Partner for e- commerce grocery solution</h2>
          <p>
            Ed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto
          </p>
          <p>
            Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia
          </p>
        </div>
      </section>
      <div className="texts-container">
        {aboutUs.map((aboutus) => (
          <div key={aboutus.id}>
            <h4>{aboutus.title}</h4>
            <p>{aboutus.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutUs;
