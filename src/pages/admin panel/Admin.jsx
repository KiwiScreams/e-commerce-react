import AddProduct from "../../components/admin components/add product/AddProduct";
import Products from "../../components/admin components/delete product/Products";
import Navigation from "../../components/admin components/navigation/Navigation";
import NotFound from "../not found/NotFound";
import "./Admin.css";
import { Routes, Route, Outlet } from "react-router-dom";
const Admin = () => {
  return (
    <>
      <section className="admin-panel-section">
        <Navigation />
        <div>
          <Routes>
            <Route path="products" element={<Products />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default Admin;
