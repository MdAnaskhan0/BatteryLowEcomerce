import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">E-Shop</h2>
            <p className="text-gray-400">
              Your go-to destination for the best deals and top-notch products.
            </p>
            <p className="mt-4 text-gray-400">
              © {new Date().getFullYear()} E-Shop. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-white transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 E-Shop Lane, Commerce City</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: support@eshop.com</p>
            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <Link
                to={"https://www.facebook.com/eshopstore"}
                className="text-white hover:text-gray-400 transition"
              >
                <FaFacebook />
              </Link>
              <Link
                to={"https://www.twitter.com/eshopstore"}
                className="text-white hover:text-gray-400 transition"
              >
                <FaTwitter />
              </Link>
              <Link
                to={"https://www.instagram.com/eshopstore"}
                className="text-white hover:text-gray-400 transition"
              >
                <FaInstagram />
              </Link>
              <Link
                to={"https://www.linkedin.com/eshopstore"}
                className="text-white hover:text-gray-400 transition"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center items-center space-x-6">
          <p>Copyright © 2024 E-Shop Store | Powered by E-Shop Store | Created by @Anas-Khan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
