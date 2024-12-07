import Banner from "../Components/Banner";
import Offer from "../Components/Offer";
import SlicedProducts from "../Components/SlicedProducts";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Banner />
      <SlicedProducts />

      <div className="container mx-auto pl-8">
        <div className="text-left ">
          <button className="bg-gradient-to-r from-indigo-700 to-indigo-900 hover:bg-gradient-to-r hover:from-indigo-900 hover:to-indigo-700 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:transform hover:scale-105 hover:transition ease-in-out duration-300">
            <Link to={"/products"}>View All Products</Link>
          </button>
        </div>
      </div>

      {/* Offer Section */}
      <Offer />
    </>
  );
};

export default Home;
