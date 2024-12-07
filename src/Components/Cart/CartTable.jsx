import { FaTrashAlt } from "react-icons/fa";


// eslint-disable-next-line react/prop-types
const CartTable = ({ removeFromCart, updateQuantity, cart }) => {
  return (
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
                  ? (product.price - (product.price * product.discount) / 100).toFixed(0)
                  : product.price}{" "}
                ৳
              </td>
              <td className="px-6 py-4 text-sm md:text-base">
                <input
                  type="number"
                  min="1"
                  value={product.quantity}
                  onChange={(e) =>
                    updateQuantity(product.id, Math.max(1, parseInt(e.target.value)))
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
  );
};

export default CartTable;
