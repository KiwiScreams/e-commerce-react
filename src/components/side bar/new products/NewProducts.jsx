import "./NewProducts.css";
import newImage1 from "../../../assets/images/home images/thumbnail-3.jpg.png";
import newImage2 from "../../../assets/images/home images/thumbnail-4.jpg.png";
import newImage3 from "../../../assets/images/home images/thumbnail-5.jpg.png";
const NewProducts = () => {
  const newProducts = [
    {
      id: 1,
      name: "Chen Cardigan",
      price: "99.50",
      image: newImage1,
    },
    {
      id: 2,
      name: "Chen Sweater",
      price: "89.50",
      image: newImage2,
    },
    {
      id: 3,
      name: "Colorful Jacket",
      price: "25",
      image: newImage3,
    },
  ];
  return (
    <>
      <section className="new-products-section">
        <h2>New products</h2>
        <ul>
          {newProducts.map((prod) => (
            <li key={prod.id} className="product-li">
              <div className="image-container">
                <img src={prod.image} alt="" />
              </div>
              <div>
                <span>{prod.name}</span>
                <span>${prod.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default NewProducts;
