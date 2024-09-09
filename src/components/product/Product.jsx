import "./Product.css";
import { useNavigate } from "react-router-dom";
import cartIcon from "../../assets/images/products/cart.svg";
import RelatedProducts from "../related products/RelatedProducts";
const Product = ({ product }) => {

  const navigate = useNavigate();
  const originalPrice = product.price;
  const discountPercentage = product.discount;
  const currentPrice =
    originalPrice - originalPrice * (discountPercentage / 100);
  const handleNavigateToDetailPage = () => {
    // navigate(`/product/${product.id}`);
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <section className="product" onClick={handleNavigateToDetailPage}>
        <div className="color" style={{ backgroundColor: `${product.color}` }}>
          {product.more}
        </div>
        <div className="image-container">
          <img src={product.image} alt={product.name} />
        </div>
        <span className="category">{product.catagory}</span>
        <h3 className="name">{product.name}</h3>
        <div style={{ display: "flex", gap: "30px", marginBottom: "10px" }}>
          <i className="fa-solid fa-star" style={{ color: "#F59758" }}></i>
          <span className="rating">({Number(product.rating).toFixed(1)})</span>
        </div>
        <p className="company">
          By <span className="green-txt">{product.company}</span>
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 className="price-h3">
            <span className="current-price">${currentPrice.toFixed(2)}</span>
            <span className="price">${originalPrice.toFixed(2)}</span>
          </h3>
          <button>
            <img src={cartIcon} alt="" />
            Add
          </button>
        </div>
      </section>
    </>
  );
};

export default Product;
