import ProductsList from "../../components/products list/productsList";
import NewProducts from "../../components/side bar/new products/NewProducts";
import SideBar from "../../components/side bar/SideBar";
import Slider from "../../components/slider/Slider";
import "./Home.css";
const Home = () => {
  return (
    <>
      <section className="home-section">
        <SideBar />
        <div>
          <Slider />
          <ProductsList popular={true}/>
        </div>
      </section>
    </>
  );
};

export default Home;
