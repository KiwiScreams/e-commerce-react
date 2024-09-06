import SideBar from "../../components/side bar/SideBar";
import Slider from "../../components/slider/Slider";
import "./Home.css";
const Home = () => {
  return (
    <>
      <section className="home-section">
        <SideBar />
        <Slider />
      </section>
    </>
  );
};

export default Home;
