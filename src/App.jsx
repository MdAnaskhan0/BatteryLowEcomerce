import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
    return (
        <Router>
            <ProductsProvider>
                <CartContextProvider>
                    <Header />
                    <div className="min-h-[65vh]">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/product/:id" element={<SingleProduct />} />
                        <Route path="/products" element={<AllProducts />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    </div>
                    <Footer />
                </CartContextProvider>
            </ProductsProvider>
        </Router>
    );
}

export default App;
