import "./Product.css";
import axios from "axios";
import { useState, useEffect } from "react";
const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section className="product-section">
        <h2>Products</h2>
        <ul>
          {data.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Product;
