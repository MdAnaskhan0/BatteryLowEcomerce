import { Link } from "react-router-dom";
import BannerImg from "../assets/BannerOffer.jpg";
import { FaArrowRight } from "react-icons/fa";

const Offer = () => {
  return (
    <div className="relative container mx-auto bg-gradient-to-r from-gray-600 to-gray-800 text-white py-20 sm:py-32 px-6 sm:px-10 lg:px-20 my-10 rounded-lg text-center">
      {/* Sticky Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40 rounded-lg"
        style={{ backgroundImage: `url(${BannerImg})` }}
      ></div>

      {/* Banner Content */}
      <div className="relative z-10 flex flex-col items-center gap-5">
        {/* Banner Text */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-wide">
          Limited Stock Available!
        </h2>

        {/* Banner Description */}
        <p className="text-sm sm:text-base lg:text-lg font-light max-w-2xl lg:max-w-4xl tracking-wider text-gray-300">
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris
          in erat justo.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            to="/products"
            className="flex items-center justify-center gap-2 px-6 sm:px-10 py-2 sm:py-3 bg-white text-gray-400 hover:text-gray-800 rounded-lg hover:scale-105 transition-transform ease-in-out duration-300"
          >
            <FaArrowRight className="text-lg" />
            <span className="font-semibold text-gray-800">Shop Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
