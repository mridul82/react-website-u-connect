import React, { useState } from "react";
import ExamSummary from "../ExamSummary";
import Footer from "../Footer";

import NavBar from "../NavBar";

const ExamPayment = () => {
  const [loading, setLoading] = useState(false);


  const handlePayment = async() => {
    try {
      
    } catch (error) {
      
    }
  }
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 lg:px-8 py-2 mt-2 mb-5">
      <div className="text-3xl font-bold text-left mt-2 mb-2">
      {/* Change the text within the h1 tag to your desired heading */}
      <h1 className="text-gray-800">Exam Payment</h1>
    </div>
        
        <div className="md:flex md:justify-between">
          
          <div className=" md:w-1/3 w-full md:flex-col md:p-5">
         
            <div className="bg-white p-4 mb-4 border border-gray-300 rounded-lg shadow-lg ">
            <h2 className="text-xl text-red-500 font-semibold mb-2">Make Payment</h2>
            Pay With UPI QR
           
                <img src="img/qr_code.jpeg" style={{ maxHeight: '500px', width: '60%', height: 'auto' }}  />
        
            <p>Scan the QR using any UPI app on your phone.</p>
            </div>
            <button
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4 block mx-auto "
                     onClick={handlePayment}
                    >
               
                      Payment Done!
                    </button>
          </div>
          <ExamSummary />
          
        </div>
   
      </div>
      <Footer />
    </>
  );
};

export default ExamPayment;
