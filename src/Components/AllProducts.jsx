import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../Context/ProductsContext";
import { CartContext } from "../Context/CartContext";
import { FaStar } from "react-icons/fa";

const AllProducts = () => {
  const { products, isLoading, error } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // React Router's navigation hook

  if (isLoading)
    return <div className="text-center text-xl py-20">Loading...</div>;
  if (error)
    return <div className="text-center text-red-600 py-20">{error}</div>;

  const handleShowDetails = (id) => {
    navigate(`/product/${id}`); // Navigate to the product details page
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Products heading */}
      <div className="text-center">
        <p className="text-lg my-4 text-gray-600">A Brush of Perfection</p>
        <h1 className="text-5xl font-bold mb-3">Check out our products</h1>
        <p className="text-md text-gray-600 mb-10">
          Explore a variety of amazing products tailored just for you!
        </p>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-8"
            />
            <h2 className="text-lg font-semibold my-5">
              {product.title.length > 20
                ? `${product.title.slice(0, 20)}...`
                : product.title}
            </h2>
            <p className="text-sm text-gray-600 truncate mb-2">
              {product.description.length > 50
                ? `${product.description.slice(0, 50)}...`
                : product.description}
            </p>
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <p className="text-black font-bold mt-2">
              {product.price} <span>৳</span>
            </p>
            <div className="mt-4 flex items-center gap-4">
              <button
                onClick={() => handleShowDetails(product.id)}
                className="bg-gradient-to-r from-indigo-700 to-blue-900 text-white py-1 px-4 rounded hover:bg-gradient-to-r hover:from-indigo-800 hover:to-blue-800 transition duration-300 cursor-pointer"
              >
                Show Details
              </button>
              <button
                onClick={() => addToCart(product)}
                className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-1 px-4 rounded hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-800 transition duration-300 cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
