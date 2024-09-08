import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Wishlist from "./pages/wishlist/Wishlist";
import Cart from "./pages/cart/Cart";
import NotFound from "./pages/not found/NotFound";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import DetailContainer from "./pages/detail/DetailContainer";
import Shop from "./pages/shop/Shop";
import Admin from "./pages/admin panel/Admin";
import SignUp from "./pages/account/signup/SignUp";
import SignIn from "./pages/account/signin/SignIn";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<DetailContainer />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
