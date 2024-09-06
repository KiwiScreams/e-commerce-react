import Category from "./category/Category";
import Filter from "./filter/Filter";
import "./SideBar.css";
const SideBar = () => {
  return (
    <>
      <section className="side-bar-section">
        <Category />
        <Filter />
      </section>
    </>
  );
};

export default SideBar;
