import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const CartLink = () => {
    const { cart } = useContext(CartContext);

    return (
        <Link
            to="/cart"
            className="text-gray-600 hover:text-gray-900 transition duration-300 relative flex items-center gap-2"
        >
            Cart
            {cart.length > 0 && (
                <span className="text-black">({cart.length})</span>
            )}
        </Link>
    );
};

export default CartLink;
