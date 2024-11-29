import { Link } from "react-router-dom";
import BannerImg from "../assets/cta-bg.jpg";
import {  FaArrowRight } from "react-icons/fa";

const Offer = () => {
  return (
    <div className="relative container mx-auto bg-gradient-to-r from-gray-600 to-gray-800 text-white py-40 px-20 my-10 rounded-lg text-center">
      {/* Sticky Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40 rounded-lg"
        style={{ backgroundImage: `url(${BannerImg})` }} // Correct way to use the imported image
      ></div>

      {/* Banner Content */}
      <div className="relative z-10 flex flex-col items-center gap-5">
        {/* Banner Text */}
        <h2 className="text-xl sm:text-2xl lg:text-5xl font-semibold tracking-wide">
          Limited Stock Available!
        </h2>

        {/* Banner Description */}
        <p className="text-sm font-light sm:text-base max-w-4xl tracking-wider text-gray-300">
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris
          in erat justo.
        </p>

        {/* Button */}
        <div className="mt-10">
          <Link to={"/products"} className="flex items-center gap-2 px-10 py-3 bg-white text-gray-400 hover:text-gray-800 rounded-lg hover:scale-105 hover:transition ease-in-out duration-300"><FaArrowRight className="text-lg" /><span className="font-semibold text-gray-800">Shop Now</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
