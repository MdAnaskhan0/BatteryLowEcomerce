import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AllProducts from "./Components/AllProducts";
import ProductsProvider from "./Context/ProductsContext";
import Cart from "./Pages/Cart";
import CartContextProvider from "./Context/CartContext";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import SingleProduct from "./Pages/SingleProduct";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CategoryProduct from "./Pages/CategoryProduct";

// ScrollToTop component
function ScrollToTop() {
  const location = useLocation();  

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]);  

  return null;
}

function App() {
  return (
    <Router>
      <ProductsProvider>
        <CartContextProvider>
          <Header />
          <ScrollToTop />
          <div className="min-h-[65vh] transition ease-in-out duration-300">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/products" element={<AllProducts />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/categorys/:category" element={<CategoryProduct />} />
            </Routes>
          </div>
          <Footer />
        </CartContextProvider>
      </ProductsProvider>
    </Router>
  );
}

export default App;
