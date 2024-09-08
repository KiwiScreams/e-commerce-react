import "./Detail.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import arrowTop from "../../assets/icons/arrow-top.svg";
import arrowBottom from "../../assets/icons/arrow-bottom.svg";
import heartIcon from "../../assets/icons/heart.svg";
import arrowsIcon from "../../assets/icons/arrows.svg";
import RelatedProducts from "../related products/RelatedProducts";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/products/" + id);
        setData(res.data);
        setLoading(false);

        const relatedRes = await axios.get("http://localhost:8000/products");
        const relatedProducts = relatedRes.data.filter((product) => {
          return product.catagory === res.data.catagory && product.id !== id;
        });
        setRelatedProducts(relatedProducts);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (relatedProducts.length > 0) {
      setLoading(false);
    }
  }, [relatedProducts]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const originalPrice = data.price;
  const discountPercentage = data.discount;
  const currentPrice =
    originalPrice - originalPrice * (discountPercentage / 100);
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  useEffect(() => {
    if (relatedProducts.length > 0) {
      setLoading(false);
    }
  }, [relatedProducts]);
  return (
    <>
      {data ? (
        <>
          <section className="detail-section">
            <div className="detail-top-container">
              <div className="image-section">
                <div className="image-container">
                  <img src={data.image} alt="" />
                </div>
                <div className="images">
                  <div className="image-box">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="image-box">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="image-box">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="image-box">
                    <img src={data.image} alt="" />
                  </div>
                </div>
              </div>
              <div className="text-container">
                <h1>{data.name}</h1>
                <div
                  style={{ display: "flex", gap: "50px", marginBottom: "37px" }}
                >
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#F59758" }}
                  ></i>
                  <span className="rating">
                    ({Number(data.rating)?.toFixed(1) ?? 0})
                  </span>
                </div>
                <h3 className="price-h3">
                  <span className="current-price">
                    $
                    {data.price &&
                      (data.price - data.price * (data.discount / 100)).toFixed(
                        2
                      )}
                  </span>
                  <div>
                    <span className="discount">{data.discount}% Off</span>
                    <br />
                    <span className="price">
                      ${data.price && data.price.toFixed(2)}
                    </span>
                  </div>
                </h3>
                <p className="desc">{data.description}</p>
                <div className="size">
                  <span>Size / Weight: </span>
                  {data.sizes &&
                    data.sizes.map((size, index) => (
                      <span
                        key={index}
                        className={`size ${
                          selectedSize === size ? "active-size" : ""
                        }`}
                        onClick={() => handleSizeChange(size)}
                      >
                        {size.value} {size.unit}
                      </span>
                    ))}
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="prod-quantity">
                    <span className="quantity">{quantity}</span>
                    <div>
                      <span className="plus" onClick={handleIncrement}>
                        <img src={arrowTop} alt="" />
                      </span>
                      <span className="minus" onClick={handleDecrement}>
                        <img src={arrowBottom} alt="" />
                      </span>
                    </div>
                  </div>
                  <button className="cart">Add to cart</button>
                  <button className="btn">
                    <img src={heartIcon} alt="" />
                  </button>
                  <button className="btn">
                    <img src={arrowsIcon} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="detail-bottom-container">
              <p>{data.additionalInfo?.[0]?.description}</p>
              <ul>
                {data.additionalInfo &&
                  data.additionalInfo.map(
                    (item, index) =>
                      item.details &&
                      item.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>
                          <span className="green-txt">
                            {Object.keys(detail).map((key, index) => (
                              <span key={index}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}:
                                <span className="detail-value">
                                  {detail[key]}
                                </span>
                              </span>
                            ))}
                          </span>
                        </li>
                      ))
                  )}
              </ul>
              <h2>Packaging & Delivery</h2>
              <p>{data.additionalInfo?.[2]?.PackagingDelivery}</p>
              <h2>Suggested Use</h2>
              <p>{data.additionalInfo?.[3]?.SuggestedUse}</p>
              <h2>Other Ingredients</h2>
              <p>{data.additionalInfo?.[4]?.Ingredients}</p>
              <h2>Warnings</h2>
              <p>{data.additionalInfo?.[5]?.warnings}</p>
            </div>
          </section>
        </>
      ) : (
        <div>loading</div>
      )}
      <RelatedProducts relatedProducts={relatedProducts} />
    </>
  );
};

export default Detail;
