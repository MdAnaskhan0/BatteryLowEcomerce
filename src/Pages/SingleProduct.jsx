import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";
import { CartContext } from "../Context/CartContext";
import ProductAditionalDetails from "../Components/ProductAditionalDetails";
import ProductStar from "../Components/ProductStar";
import RelatedProduct from "../Components/RelatedProduct";

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
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Product Image */}
        <div className="flex justify-center items-center lg:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-3/4 sm:w-2/3 md:w-[400px] lg:w-[450px] max-w-full h-auto object-cover rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 capitalize">
            {product.title.length > 70 ? product.title.slice(0, 70) + "..." : product.title}
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 pr-0 sm:pr-[15%] lg:pr-[25%] text-justify">
            {product.description.slice(0, 300)}
          </p>
          <ProductStar />
          <p className="text-gray-800 text-base sm:text-lg font-normal">Brand: <span className="uppercase">{product.brand}</span></p>
          <p className="text-gray-800 text-base sm:text-lg font-normal mb-1">Model: <span className="uppercase">{product.model}</span></p>
          <div className="flex flex-wrap items-center space-x-4 mb-4">
            <p className="text-gray-800 text-base sm:text-lg font-normal">
              Category: <span className="uppercase">{product.category}</span>
            </p>
            <p className="text-gray-800 text-base sm:text-lg font-normal bg-green-100 px-4 py-2 rounded-md">
              Status: In Stock
            </p>
          </div>
          {/* Product Price */}
          <p className="text-gray-800 text-xl sm:text-2xl font-semibold">
            Price:
            <span className="pl-2">
              {product.discount
                ? (
                    product.price - (product.price * product.discount) / 100
                  ).toFixed(0)
                : product.price}
            </span>
            <span className="pl-1">৳</span>
          </p>

          <p className="text-black font-medium mt-2 text-sm sm:text-base">
            <del>{product.price}৳</del>
            <span className="text-red-600 pl-2">
              -{product.discount ? product.discount : 0}%
            </span>
          </p>

          {/* Add to Cart Button */}
          <div className="mt-6">
            <button
              onClick={() => addToCart(product)}
              className="w-full md:w-auto bg-gradient-to-r from-blue-700 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white py-2 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <ProductAditionalDetails />

      {/* Related Products Section */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
          Related Products
        </h2>
        {/* Render related products */}
        <RelatedProduct />
      </div>
    </div>
  );
};

export default SingleProduct;
