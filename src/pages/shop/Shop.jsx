import ProductsList from "../../components/products list/productsList";
import SideBar from "../../components/side bar/SideBar";
import "./Shop.css";
import { useState, useEffect } from "react";
const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <section className="shop-section">
        <div>
          <ProductsList selectedCategory={selectedCategory} />
        </div>
        <SideBar onCategoryChange={handleCategoryChange} />
      </section>
    </>
  );
};

export default Shop;
