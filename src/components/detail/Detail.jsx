import "./Detail.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import arrowTop from "../../assets/icons/arrow-top.svg";
import arrowBottom from "../../assets/icons/arrow-bottom.svg";
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/products/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
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
  return (
    <>
      {data ? (
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
                    <span key={index} className="size">
                      {size}
                    </span>
                  ))}
              </div>
              <div>
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
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default Detail;
