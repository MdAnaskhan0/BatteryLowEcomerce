import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { toast } from "react-toastify";
import { FaTrashAlt } from "react-icons/fa";
import OrderHistory from "../Components/OrderHistory";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [OrderHistoryData, setOrderHistoryData] = useState(null); 
  const calculateTotal = () => {
    return cart.reduce(
      (total, product) =>
        total +
        parseFloat(
          product.discount
            ? product.price - (product.price * product.discount) / 100
            : product.price
        ) *
          product.quantity,
      0
    );
  };

  // Open the checkout modal
  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const confirmCheckout = () => {
    const OrderHistoryCart = [...cart];
    const OrderHistoryTotal = calculateTotal();

    toast.success("Checkout successful!", { position: "top-right", autoClose: 1000 });

    setTimeout(() => {
      setOrderHistoryData({ cart: OrderHistoryCart, total: OrderHistoryTotal }); 
      clearCart();
    }, 1500);

    setIsModalOpen(false);
  };

  // Cancel checkout process
  const cancelCheckout = () => {
    setIsModalOpen(false);
  };

  if (OrderHistoryData) {
    return <OrderHistory cart={OrderHistoryData.cart} total={OrderHistoryData.total} />;
  }

  // Render empty cart view if no items
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
        <p className="text-center text-lg text-gray-600">
          Your cart is currently empty.
        </p>
      </div>
    );
  }

  // Render cart and checkout
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left border-b">Product</th>
              <th className="px-6 py-3 text-left border-b">Title</th>
              <th className="px-6 py-3 text-left border-b">Description</th>
              <th className="px-6 py-3 text-left border-b">Price</th>
              <th className="px-6 py-3 text-left border-b">Quantity</th>
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
                <td className="px-6 py-4 text-sm md:text-base">
                  {product.title.slice(0, 22)}
                </td>
                <td className="px-6 py-4 text-sm md:text-base">
                  {product.description.slice(0, 45)}
                </td>
                <td className="px-6 py-4 text-sm md:text-base">
                  {product.discount
                    ? (
                        product.price -
                        (product.price * product.discount) / 100
                      ).toFixed(0)
                    : product.price}{" "}
                  ৳
                </td>
                <td className="px-6 py-4 text-sm md:text-base">
                  <input
                    type="number"
                    min="1"
                    value={product.quantity}
                    onChange={(e) =>
                      updateQuantity(
                        product.id,
                        Math.max(1, parseInt(e.target.value))
                      )
                    }
                    className="w-16 text-center border rounded-md"
                  />
                </td>
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

      {/* Total and Checkout */}
      <div className="mt-8 text-left">
        <div className="flex flex-col items-start tracking-wide">
          <p className="text-lg font-normal">
            Product Total: {calculateTotal().toFixed(0)} ৳
          </p>
          <p className="text-lg font-normal">Shipping: 100 ৳</p>
          <hr className="bg-gray-300 h-0.5 w-full my-2" />
          <p className="text-xl font-semibold">
            Total Price: {(calculateTotal() + 100).toFixed(0)} ৳
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
        <div
          role="dialog"
          aria-labelledby="checkout-modal-title"
          aria-modal="true"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <h2 id="checkout-modal-title" className="text-xl font-semibold mb-4">
              Confirm Order
            </h2>
            <p>Are you sure you want to proceed?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={cancelCheckout}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button
                onClick={confirmCheckout}
                className="bg-blue-900 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
