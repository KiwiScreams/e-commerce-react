import { useNavigate } from "react-router-dom";
import Product from "../product/Product";
import "./ProductsList.css";
import axios from "axios";
import { useState, useEffect } from "react";
import RelatedProducts from "../related products/RelatedProducts";
import Cart from "../../pages/cart/Cart";

const ProductsList = ({ popular }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const popularProducts = popular
    ? products.filter((product) => product.rating > 4)
    : products;

  return (
    <>
      <section className="product-list-section">
        <div className="product-list">
          {products.length > 0 &&
            popularProducts.map((product) => (
              <Product key={product.id}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default ProductsList;
