import React from "react";
import BannerImg from '../assets/bg-01-free-img.jpg'

const Banner = () => {
  return (
    <>
      <div className="relative container mx-auto mt-10 pt-16 rounded-xl w-full h-80 md:h-96 lg:h-[600px] bg-gray-800">
        {/* Banner Image */}
        <img
          src={BannerImg}
          alt="E-commerce Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-xl"
        />

        {/* Banner Content */}
        <div className="absolute inset-0 flex justify-center items-center text-center text-white px-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Shop the Latest Trends
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Discover the best deals on fashion, electronics, and more!
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
