import React from 'react'
import { Link } from 'react-router-dom'


const PaymentCompleteModal = () => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center block">
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <div className="relative bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-16 h-16 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-xl font-bold mt-4">Payment Complete</h2>
        <p className="text-gray-700 mt-2">
          Your payment has been successfully processed.
        </p>
        <div className="mt-6">
         
          <Link
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
            to="/student-profile-view"
          >
            Go to Profile
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PaymentCompleteModal
