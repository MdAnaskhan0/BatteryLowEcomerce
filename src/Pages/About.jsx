import React from "react";
import { FaStar, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AboutImg from '../assets/bg-01-free-img.jpg'

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We are a forward-thinking e-commerce platform dedicated to bringing you the best shopping experience.
          </p>
        </div>

        {/* Company Story Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative">
            <img
              src={AboutImg}
              alt="Company Image"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center text-justify">
            <h2 className="text-3xl font-semibold text-gray-900">Our Story</h2>
            <p className="mt-4 text-gray-600">
              Founded with the goal of creating a better online shopping experience, our company has grown rapidly in the past few years.
              We focus on offering high-quality products, exceptional customer service, and a seamless online shopping experience.
            </p>
            <p className="mt-4 text-gray-600">
              Whether you’re searching for the latest trends in fashion or electronics, we are here to help you find exactly what you're looking for.
            </p>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-900">Our Mission & Vision</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
              <p className="mt-4 text-gray-600">
                Our mission is to provide a user-friendly platform where customers can find high-quality products at the best prices.
                We aim to be the most reliable and innovative e-commerce platform.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
              <p className="mt-4 text-gray-600">
                We envision being a global leader in e-commerce, offering an exceptional customer experience, fostering innovation, and providing our customers with high-value products.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-900">Our Core Values</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <FaStar className="text-yellow-500 text-3xl" />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">Excellence</h3>
              <p className="mt-2 text-gray-600 text-center">
                We strive for excellence in everything we do, offering only the highest-quality products and services.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaPhoneAlt className="text-blue-500 text-3xl" />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">Customer Focus</h3>
              <p className="mt-2 text-gray-600 text-center">
                Our customers are our top priority. We work tirelessly to ensure their satisfaction.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-green-500 text-3xl" />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">Integrity</h3>
              <p className="mt-2 text-gray-600 text-center">
                We believe in transparency, honesty, and doing business with integrity in all our relationships.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-900">Contact Us</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Our Address</h3>
              <p className="mt-4 text-gray-600">
                1234 E-commerce Blvd, Suite 100, Tech City, TX 12345
              </p>
              <div className="mt-4 flex items-center text-gray-600">
                <FaPhoneAlt className="mr-2 text-xl" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="mt-2 flex items-center text-gray-600">
                <FaEnvelope className="mr-2 text-xl" />
                <p>info@ecommerce.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Social Media</h3>
              <p className="mt-4 text-gray-600">Follow us on our social media channels for updates, promotions, and more:</p>
              <div className="mt-4 flex space-x-6">
                <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
                <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
                <a href="#" className="text-pink-600 hover:text-pink-800">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
