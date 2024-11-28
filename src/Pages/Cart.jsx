import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Checkout button handle
  const handleCheckout = () => {
    setIsModalOpen(true); // Open the modal when checkout is clicked
  };

  // Confirm checkout
  const confirmCheckout = () => {
    toast.success("Checkout successful!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      clearCart();
    },2000)
    setIsModalOpen(false);
  };

  // Cancel checkout
  const cancelCheckout = () => {
    setIsModalOpen(false);
  };

  // Calculate total price of the cart
  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + parseFloat(product.price),
      0
    );
  };

  if (cart.length === 0) {
    return (
      <>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
          <p className="text-center text-lg text-gray-600">
            Your cart is currently empty.
          </p>
        </div>
      </>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left border-b">Product</th>
              <th className="px-6 py-3 text-left border-b">Title</th>
              <th className="px-6 py-3 text-left border-b">Description</th>
              <th className="px-6 py-3 text-left border-b">Price</th>
              <th className="px-6 py-3 text-left border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="px-6 py-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4 text-sm md:text-base">{product.title.slice(0, 20)}</td>
                <td className="px-6 py-4 text-sm md:text-base">{product.description.slice(0, 35)}</td>
                <td className="px-6 py-4 text-sm md:text-base">{product.price} ৳</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-left">
        <div className="flex flex-col items-start tracking-wide">
          <p className="text-lg font-normal">
            Product Total: {calculateTotal().toFixed(2)} ৳
          </p>
          <p className="text-lg font-normal">Shipping: 100 ৳</p>
          <hr className="bg-gray-300 h-0.5 w-full my-2" />
          <p className="text-xl font-semibold">
            Total Price: {(calculateTotal() + 100).toFixed(2)} ৳
          </p>
        </div>

        <button
          onClick={handleCheckout}
          className="mt-4 bg-blue-900 hover:bg-blue-700 text-white py-2 px-6 rounded-lg w-full md:w-auto"
        >
          Proceed to Checkout
        </button>
      </div>

      {/* Modal for Checkout Confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Confirm Order</h2>
            <p className="mb-4">
              Are you sure you want to proceed with the checkout?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={cancelCheckout}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={confirmCheckout}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default Cart;
