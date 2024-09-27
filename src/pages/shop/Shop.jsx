import ProductsList from "../../components/products list/productsList";
import SideBar from "../../components/side bar/SideBar";
import "./Shop.css";
const Shop = () => {
  return (
    <>
      <section className="shop-section">
        <div>
          <ProductsList />
        </div>
        <SideBar />
      </section>
    </>
  );
};

export default Shop;
