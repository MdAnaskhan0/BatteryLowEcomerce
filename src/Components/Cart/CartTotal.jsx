const CartTotal = ({ calculateTotal }) => {
    return (
      <div className="mt-8 text-left">
        <div className="flex flex-col items-start tracking-wide">
          <p className="text-lg font-normal">Product Total: {calculateTotal().toFixed(0)} ৳</p>
          <p className="text-lg font-normal">Shipping: 100 ৳</p>
          <hr className="bg-gray-300 h-0.5 w-full my-2" />
          <p className="text-xl font-semibold">
            Total Price: {(calculateTotal() + 100).toFixed(0)} ৳
          </p>
        </div>
      </div>
    );
  };
  
  export default CartTotal;
  