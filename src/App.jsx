import { Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Wishlist from "./pages/wishlist/Wishlist"
import Cart from "./pages/cart/Cart"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  )
}

export default App
