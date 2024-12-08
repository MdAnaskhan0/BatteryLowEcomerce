// eslint-disable-next-line react/prop-types
const OrderHistory = ({ cart, total, shipping = 100 }) => {
  return (
    <>
      <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-6 py-3 border-b">Product</th>
              <th className="px-6 py-3 border-b">Title</th>
              <th className="px-6 py-3 border-b">Price</th>
              <th className="px-6 py-3 border-b">Quantity</th>
              <th className="px-6 py-3 border-b">Subtotal</th>
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
                  {product.title.length > 20? product.title.slice(0, 15) + "..." : product.title}
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
                  {product.quantity}
                </td>
                <td className="px-6 py-4 text-sm md:text-base">
                  {(
                    product.quantity *
                    (product.discount
                      ? product.price -
                        (product.price * product.discount) / 100
                      : product.price)
                  ).toFixed(0)}{" "}
                  ৳
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-right">
        <p className="text-lg font-normal">Product Total: {(total).toFixed(0)} ৳</p>
        <p className="text-lg font-normal">Shipping: {shipping} ৳</p>
        <hr className="bg-gray-300 h-0.5 w-full my-2" />
        <p className="text-xl font-semibold">
         Total Bill: {(total + shipping).toFixed(0)} ৳
        </p>
      </div>
    </div>
    </>
  )
}

export default OrderHistory

