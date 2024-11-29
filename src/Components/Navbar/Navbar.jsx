import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartLink from "./CartLink";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { ProductsContext } from "../../Context/ProductsContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { products } = useContext(ProductsContext);

  // Extract unique categories from the products array
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center text-lg font-medium">
        {/* Logo */}
        <Logo />

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

          {/* Category Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-600 hover:text-gray-900 transition duration-300 flex items-center"
            >
              Categories
              <svg
                className="ml-2 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white border rounded-lg shadow-lg mt-2 w-48">
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/categorys/${category}`}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition duration-300 capitalize"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}
          </div>

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

          {/* Cart Link */}
          <CartLink />
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
      {isOpen && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
