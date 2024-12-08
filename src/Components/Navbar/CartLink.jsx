import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const CartLink = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      className="relative flex items-center text-gray-700 hover:text-indigo-600 transition duration-300"
    >
      {/* Cart Icon */}
      <div className="relative">
        <FaShoppingCart className="w-6 h-6" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
            {cart.length}
          </span>
        )}
      </div>

      {/* Cart Text */}
      <span className="ml-2 font-medium text-lg hidden sm:inline-block">
        Cart
      </span>
    </Link>
  );
};

export default CartLink;
