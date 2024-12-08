import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductsContext } from "../Context/ProductsContext";
import { CartContext } from "../Context/CartContext";
import ProductStar from "./ProductStar";
import BannerImage from "../assets/Banner-ALL.jpg";

const AllProducts = () => {
  const { products, isLoading, error } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  if (isLoading)
    return <div className="text-center text-xl py-20">Loading...</div>;
  if (error)
    return <div className="text-center text-red-600 py-20">{error}</div>;

  const handleShowDetails = (id) => {
    navigate(`/product/${id}`);
  };

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Search bar */}
      <div className="flex justify-start mb-10">
        <div className="flex flex-col w-full">
          <label htmlFor="search" className="mb-2 text-lg tracking-wide">Search Products:</label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="border border-gray-300 rounded-md p-2 w-full max-w-sm"
          />
        </div>
      </div>

      {/* Banner */}
      <div
        className="relative bg-cover bg-fixed bg-center px-4 py-20 text-center rounded-lg shadow-md mb-20"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>{" "}
        {/* Overlay to make text more readable */}
        <div className="relative z-10">
          <h1 className="text-3xl font-extrabold text-white mb-4">
            Welcome to our online store!
          </h1>
          <p className="text-lg text-white mb-6">
            We offer a wide range of high-quality products at competitive
            prices.
          </p>
          <Link
            to="/products"
            className="inline-block bg-yellow-500 text-black py-3 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400 transition"
          >
            Start Shopping
          </Link>
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-8 hover:scale-105 transition ease-in-out duration-300"
              />
              <h2 className="text-lg font-semibold mt-5">
                {product.title.length > 20
                  ? `${product.title.slice(0, 20)}...`
                  : product.title}
              </h2>
              <p className="text-lg text-gray-800 truncate mb-4">
                {product.brand.length > 20
                  ? `${product.brand.slice(0, 20)}...`
                  : product.brand}
              </p>
              <p className="text-sm text-gray-600 truncate mb-2">
                {product.description.length > 50
                  ? `${product.description.slice(0, 50)}...`
                  : product.description}
              </p>
              <ProductStar />
              <p className="text-black font-bold mt-4 text-xl">
                {product.discount
                  ? (
                      product.price -
                      (product.price * product.discount) / 100
                    ).toFixed(0)
                  : product.price}
                <span className="">৳</span>
              </p>

              <p className="text-black font-medium mt-2 ">
                <del> {product.price}</del>
                <span>৳</span>{" "}
                <span className="text-red-600">
                  -{product.discount ? product.discount : 0}%
                </span>
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
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
