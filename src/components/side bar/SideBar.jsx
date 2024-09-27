import Category from "./category/Category";
import Filter from "./filter/Filter";
import NewProducts from "./new products/NewProducts";
const SideBar = ({onCategoryChange}) => {
  return (
    <>
      <section className="side-bar-section">
        <Category onCategoryChange={onCategoryChange}/>
        <Filter />
        <NewProducts />
      </section>
    </>
  );
};

export default SideBar;
