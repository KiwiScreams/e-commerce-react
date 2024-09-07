import "./Product.css";
const Product = ({product}) => {
  return (
    <>
      <section className="product-section">
        <h3>{product.name}</h3>
        <p>{product.id}</p>
      </section>
    </>
  );
};

export default Product;
