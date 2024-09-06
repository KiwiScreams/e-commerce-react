import "./Category.css";
import categories from "..";
const Category = () => {
  return (
    <>
      <section className="category-section">
        <h2>Category</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id} className="category-li">
              <div className="image-container">
                <img src={category.image} alt="" />
              </div>
              {category.title}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Category;
