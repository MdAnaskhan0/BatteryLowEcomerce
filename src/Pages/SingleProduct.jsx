import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";
import { FaStar } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";

const SingleProduct = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-600 text-xl font-semibold">
          Product not found. Please check the product ID.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 mt-10">
      {/* Product Details Wrapper */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Product Image */}
        <div className="flex justify-center items-center lg:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-[400px] max-w-sm lg:max-w-md h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 pr-[25%] text-justify">
            {product.description}
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <p className="text-gray-800 text-lg font-normal">
              Category: {product.category}
            </p>
            <p className="text-gray-800 text-lg font-normal bg-green-100 p-2 w-[150px]">Status: In Stock</p>
          </div>
          <p className="text-gray-800 text-2xl font-semibold">
            Price: {product.price} <span>৳</span>
          </p>

          {/* Add to Cart Button */}
          <div className="mt-6">
            <button onClick={() => addToCart(product)} className="w-full md:w-auto bg-gradient-to-r from-blue-700 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white py-2 px-6 rounded-lg shadow-lg transition-all duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Product Details
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
          nibh nec laoreet hendrerit, tortor arcu suscipit felis, a interdum
          eros nisi ut sapien. Morbi dapibus, lorem at tincidunt placerat,
          mauris orci tincidunt orci, et tincidunt velit velit eget neque.
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
