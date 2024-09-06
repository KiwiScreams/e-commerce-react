import "./SubscribePanel.css";
import image from "../../assets/images/slider images/slider-2.png";
import SubscribeInput from "../subscribe input/SubscribeInput";
const SubscribePanel = () => {
  return (
    <>
      <section
        className="subscribe-panel-section"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="content">
          <h2>Stay home & get your daily needs from our shop</h2>
          <p>
            Start You'r Daily Shopping with 
            <span className="green-txt"> Nest Mart</span>
          </p>
        </div>
        <SubscribeInput />
      </section>
    </>
  );
};

export default SubscribePanel;
