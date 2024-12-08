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

        {/* Categories Dropdown */}
        <div>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full text-left text-gray-600 flex items-center justify-between"
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
            <div className="mt-2 space-y-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/categorys/${category}`}
                  className="block text-gray-600 px-4 py-2 rounded hover:bg-gray-100 transition duration-300 capitalize"
                >
                  {category}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          to="/contact"
          className="block text-gray-600 hover:text-gray-900 transition duration-300"
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
