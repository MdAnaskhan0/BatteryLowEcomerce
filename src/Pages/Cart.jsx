import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { toast } from "react-toastify";
import CartTable from "../Components/Cart/CartTable";
import CartTotal from "../Components/Cart/CartTotal";
import CheckoutModal from "../Components/Cart/CheckoutModal";
import CartEmpty from "../Components/Cart/CartEmpty";
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
      setIsModalOpen(false);
    }, 1500);
  };

  const cancelCheckout = () => {
    setIsModalOpen(false);
  };

  if (OrderHistoryData) {
    return <OrderHistory cart={OrderHistoryData.cart} total={OrderHistoryData.total} />;
  }

  if (cart.length === 0) {
    return <CartEmpty />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      <CartTable removeFromCart={removeFromCart} updateQuantity={updateQuantity} cart={cart} />
      <CartTotal calculateTotal={calculateTotal} />
      <button
        onClick={handleCheckout}
        className="mt-4 bg-blue-900 hover:bg-blue-700 text-white py-2 px-6 rounded-lg w-full md:w-auto"
      >
        Proceed to Checkout
      </button>
      <CheckoutModal
        isModalOpen={isModalOpen}
        cancelCheckout={cancelCheckout}
        confirmCheckout={confirmCheckout}
      />
    </div>
  );
};

export default Cart;
