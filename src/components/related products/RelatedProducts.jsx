import "./RelatedProducts.css";
import cartIcon from "../../assets/images/products/cart.svg";
import { useNavigate } from "react-router-dom";

const RelatedProducts = ({ relatedProducts }) => {
  if (!relatedProducts || relatedProducts.length === 0) {
    return null;
  }
  
  const navigate = useNavigate();
  const handleNavigateToDetail = (id) => {
    navigate(`/product/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="related-products-section">
      <h2>Related products</h2>
      <div className="related-products-container">
        {relatedProducts.map((product, index) => {
          const discountPercentage = product.discount;
          const originalPrice = product.price;
          const currentPrice =
            originalPrice - originalPrice * (discountPercentage / 100);
          return (
            <div
              key={product.id}
              className="related-product product"
              onClick={() => handleNavigateToDetail(product.id)}
            >
              <div
                className="color"
                style={{ backgroundColor: `${product.color}` }}
              >
                {product.more}
              </div>
              <div className="image-container">
                <img src={product.image} alt={product.name} />
              </div>
              <span className="category">{product.catagory}</span>
              <h3 className="name">{product.name}</h3>
              <div
                style={{ display: "flex", gap: "30px", marginBottom: "10px" }}
              >
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#F59758" }}
                ></i>
                <span className="rating">
                  ({Number(product.rating).toFixed(1)})
                </span>
              </div>
              <p className="company">
                By <span className="green-txt">{product.company}</span>
              </p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3 className="price-h3">
                  <span className="current-price">
                    ${currentPrice.toFixed(2)}
                  </span>
                  <span className="price">${originalPrice.toFixed(2)}</span>
                </h3>
                <button>
                  <img src={cartIcon} alt="" />
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedProducts;
