import Product from "../product/Product";
import "./ProductsList.css";
import axios from "axios";
import { useState, useEffect } from "react";
const ProductsList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section className="product-list-section">
        <h2>Products List</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Product product={product} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default ProductsList;
