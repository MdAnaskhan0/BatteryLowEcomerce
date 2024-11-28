import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaPhoneAlt, FaEnvelope, FaLocationArrow, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  // Zod schema for form validation
  const schema = z.object({
    name: z.string().min(2, 'Name is required').max(50, 'Name cannot be longer than 50 characters'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
  });

  // Use React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [formSubmitted, setFormSubmitted] = React.useState(false);

  // Handle form submission
  const onSubmit = (data) => {
    setFormSubmitted(true);
    console.log(data); // You can replace this with actual form submission logic
    reset(); // Reset the form after submission
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Have any questions or need support? We're here to help! Reach out to us, and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Send Us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows="4"
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-l from-indigo-600 to-indigo-900 hover:bg-gradient-to-t hover:from-blue-600 hover:to-blue-700 text-white rounded-lg focus:outline-none"
              >
                Send Message
              </button>
            </form>
            {formSubmitted && (
              <div className="mt-4 text-green-500 text-center">
                <p>Thank you! Your message has been sent successfully.</p>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Our Contact Information</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center text-gray-700">
                <FaPhoneAlt className="mr-3 text-md text-gray-700" />
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center text-gray-700">
                <FaEnvelope className="mr-3 text-md text-gray-700" />
                <p className="text-lg">info@ecommerce.com</p>
              </div>
              <div className="flex items-center text-gray-700">
                <FaLocationArrow className="mr-3 text-xl text-gray-700" />
                <p className="text-lg">1234 E-commerce Blvd, Suite 100, Tech City, TX 12345</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 space-x-6 flex">
              <a href="https://www.facebook.com" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={30} />
              </a>
              <a href="https://www.twitter.com" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={30} />
              </a>
              <a href="https://www.instagram.com" className="text-pink-600 hover:text-pink-800">
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
