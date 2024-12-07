import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../Context/ProductsContext";
import { CartContext } from "../Context/CartContext";
import ProductHeading from "./ProductHeading";
import ProductStar from "./ProductStar";

const SlicedProducts = () => {
  const { products, isLoading, error } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  if (isLoading)
    return <div className="text-center text-xl py-20">Loading...</div>;
  if (error)
    return <div className="text-center text-red-600 py-20">{error}</div>;

  // Slice the products array to show only 12
  const sliceProducts = products.slice(0, 12);

  const handleShowDetails = (id) => {
    navigate(`/product/${id}`); 
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Products heading */}
      <ProductHeading />

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sliceProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-8 hover:scale-105 transition ease-in-out duration-300"
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
            <ProductStar />
            <p className="text-black font-bold mt-4 text-xl">
            {product.discount?(product.price - (product.price * product.discount) / 100).toFixed(0):product.price}
              <span className="">৳</span> 
            </p>

            <p className="text-black font-medium mt-2 ">
            <del> {product.price}</del>
              <span>৳</span> <span className="text-red-600">-{product.discount?product.discount:0}%</span>
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

export default SlicedProducts;
