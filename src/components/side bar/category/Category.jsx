import "./Category.css";
import categories from "..";
const Category = () => {
  return (
    <>
      <section className="category-section">
        <h2>Category</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <img src={category.image} alt="" />
              {category.title}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Category;
