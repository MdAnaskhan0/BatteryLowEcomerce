import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";  // Import CartContext

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cart } = useContext(CartContext);  // Access cart state

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center text-lg font-medium">
                {/* Logo */}
                <div className="text-xl font-bold text-gray-800">
                    <Link to="/">E-Shop</Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link
                        to="/"
                        className="text-gray-600 hover:text-gray-900 transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/products"
                        className="text-gray-600 hover:text-gray-900 transition duration-300"
                    >
                        Products
                    </Link>
                    <Link
                        to="/about"
                        className="text-gray-600 hover:text-gray-900 transition duration-300"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-600 hover:text-gray-900 transition duration-300"
                    >
                        Contact
                    </Link>

                    {/* Cart Link with Item Count */}
                    <Link
                        to="/cart"
                        className="text-gray-600 hover:text-gray-900 transition duration-300 relative flex items-center gap2"
                    >
                        Cart 
                        {/* Display cart item count */}
                        {cart.length > 0 && (
                            <span className="">
                                ({cart.length})
                            </span>
                        )}
                    </Link>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-800 hover:text-gray-900 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-4 py-4 space-y-4">
                        <Link
                            to="/"
                            className="block text-gray-600 hover:text-gray-900 transition duration-300"
                        >
                            Home
                        </Link>
                        <Link
                            to="/products"
                            className="block text-gray-600 hover:text-gray-900 transition duration-300"
                        >
                            Products
                        </Link>
                        <Link
                            to="/about"
                            className="block text-gray-600 hover:text-gray-900 transition duration-300"
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="block text-gray-600 hover:text-gray-900 transition duration-300"
                        >
                            Contact
                        </Link>

                        {/* Mobile Cart Link with Item Count */}
                        <Link
                            to="/cart"
                            className="block text-gray-600 hover:text-gray-900 transition duration-300 relative"
                        >
                            Cart 
                            {cart.length > 0 && (
                                <span className="text-black">
                                    ({cart.length})
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
