import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import ProductStar from "../Components/ProductStar";
import HederBanner from "../assets/Banner.jpg";

const CategoryProduct = () => {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const navigate = useNavigate();

  const handleShowDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-10">
        {/* Products heading */}

        <div
          className="relative bg-cover bg-center bg-no-repeat py-10 px-6 sm:py-16 sm:px-12 md:px-20 lg:py-20 lg:px-40 rounded-lg shadow-lg mb-10"
          style={{
            backgroundImage: `url(${HederBanner})`,
          }}
        >
          {/* Optional Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

          {/* Content */}
          <div className="relative text-center max-w-3xl mx-auto text-white">
            {/* Tagline */}
            <p className="text-lg sm:text-xl my-4">A Brush of Perfection</p>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              Check out our{" "}
              <span className="text-yellow-400 uppercase">{category}</span>{" "}
              products
            </h1>

            {/* Description */}
            <p className="text-md sm:text-lg mb-10">
              Explore a variety of amazing products tailored just for you!
            </p>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-8"
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
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryProduct;
