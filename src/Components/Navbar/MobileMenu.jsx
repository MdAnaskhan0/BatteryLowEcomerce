import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../Context/ProductsContext";
import CartLink from "./CartLink";

const MobileMenu = () => {
  const { products } = useContext(ProductsContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Extract unique categories
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="bg-white shadow-md">
      <div className="px-4 py-4 space-y-4">
        <Link
          to="/"
          className="block text-gray-700 hover:text-indigo-600 transition duration-300 font-medium"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="block text-gray-700 hover:text-indigo-600 transition duration-300 font-medium"
        >
          Products
        </Link>
        <Link
          to="/about"
          className="block text-gray-700 hover:text-indigo-600 transition duration-300 font-medium"
        >
          About
        </Link>

        {/* Categories Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full text-left text-gray-700 flex items-center justify-between font-medium hover:text-indigo-600 transition duration-300"
          >
            Categories
            <svg
              className={`w-5 h-5 transform ${
                isDropdownOpen ? "rotate-180" : ""
              } transition-transform duration-300`}
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
            <div className="mt-2 bg-white border rounded-lg shadow-md">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/categorys/${category}`}
                  className="block text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition duration-300 capitalize"
                >
                  {category}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          to="/contact"
          className="block text-gray-700 hover:text-indigo-600 transition duration-300 font-medium"
        >
          Contact
        </Link>

        {/* Cart Link */}
        <CartLink />
      </div>
    </div>
  );
};

export default MobileMenu;
