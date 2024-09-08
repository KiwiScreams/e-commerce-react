import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <section className="admin-panel-navigation">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/admin/add">Add new product</NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Navigation;
