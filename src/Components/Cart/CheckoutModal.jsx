const CheckoutModal = ({ isModalOpen, cancelCheckout, confirmCheckout }) => {
    return (
      isModalOpen && (
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
      )
    );
  };
  
  export default CheckoutModal;
  