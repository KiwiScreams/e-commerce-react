import Category from "./category/Category";
import Filter from "./filter/Filter";
import NewProducts from "./new products/NewProducts";
import "./SideBar.css";
const SideBar = () => {
  return (
    <>
      <section className="side-bar-section">
        <Category />
        <Filter />
        <NewProducts />
      </section>
    </>
  );
};

export default SideBar;
