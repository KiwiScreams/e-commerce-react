import "./NotFound.css";
import notFoundImage from "../../assets/images/not found images/not found.png";
const NotFound = () => {
  return (
    <>
      <section className="not-found-section">
        <div className="not-found-container">
          <div className="image-container">
            <img src={notFoundImage} alt="not found icon" />
          </div>
          <h2>Oops! Page not found</h2>
          <p>
            It's looking like you may have taken a wrong turn. Don't worry... it
            happens to the best of us. Here's a little tip that might help you
            get back on track.
          </p>
          <button>Back to main</button>
        </div>
      </section>
    </>
  );
};

export default NotFound;
