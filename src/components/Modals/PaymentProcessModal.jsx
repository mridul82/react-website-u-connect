import React from 'react';

const PaymentProcessModal = () => {

  const handleRefresh = () => {
    window.location.reload();
  };


  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="relative bg-white rounded-lg p-8 max-w-md w-full">
          <div className="flex justify-center">
            <img
              src="img/payment_processing.jpg"
              alt="Payment Processing"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-bold mt-4">Payment Processing</h2>
          <p className="text-gray-700 mt-2">
            Your payment is currently being processed. Please wait till we confirm your payment. It may take 24 hours from our side to confirm your payment.
          </p>
          <div className="mt-6">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleRefresh}
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentProcessModal
