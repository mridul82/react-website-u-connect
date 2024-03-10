import axios from "axios";
import React, { useEffect, useState } from "react";
import API_CONFIG from "../../Config/apiLink";
import ExamSummary from "../ExamSummary";
import Footer from "../Footer";

import Loader from "../../Layout/Loader";
import NavBar from "../NavBar";

const ExamPayment = () => {
  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState(false);


  useEffect(() => {
    // Check if 'paymentStatus' is set to true in local storage
    const storedPaymentStatus = localStorage.getItem("paymentStatus");
    console.log(storedPaymentStatus);
    if (storedPaymentStatus === "true") {
      setPayment(true);
    }
  }, []);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      axios
        .get(`${API_CONFIG.BASE_URL}/api/exam-payment/${user.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json", // Assuming you're sending JSON data
          },
        })
        .then((response) => {
          setLoading(false);
          console.log(response.data.data);
          response.data.data.forEach(item => {
            if (item.payment === 1) {
                localStorage.setItem("paymentStatus", true);
                setPayment(true); // Assuming setPayment is a function to update the payment status in your component state
                console.log("paymentStatus");
            }
        });
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    //localStorage.setItem('isProfileComplete', isProfileComplete);
    
  };

  const handleReset = () => {
    localStorage.removeItem("paymentStatus");
    setPayment(false);
    console.log("paymentStatus");
  };

  useEffect(() => {
   // handlePayment();
  },[])

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 lg:px-8 py-2 mt-2 mb-5">
        <div className="text-3xl font-bold text-left mt-2 mb-2">
          {/* Change the text within the h1 tag to your desired heading */}
          <h1 className="text-gray-800">Exam Payment</h1>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="md:flex md:justify-between">
            <div className=" md:w-1/3 w-full md:flex-col md:p-5">
              <div className="bg-white p-4 mb-4 border border-gray-300 rounded-lg shadow-lg ">
                <h2 className="text-xl text-red-500 font-semibold mb-2">
                  Make Payment
                </h2>

                <img
                  src="img/qr_code.jpeg"
                  style={{ maxHeight: "300px", height: "auto" }}
                />

                <p>
                  Scan the QR using any UPI app on your phone<br></br> OR pay on
                  the number{" "}
                  <span style={{ color: "red", fontSize: "26px" }}>
                    7002054943
                  </span>
                  .
                </p>
                <p
                  style={{ fontSize: "12px", fontWeight: "bold", color: "red" }}
                >
                  *Once the paymnet is done click on 'Payment Done' button to
                  confirm payment
                </p>

                {payment && localStorage.getItem("paymentStatus") ? (
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-4 block mx-auto"
                    disabled
                  >
                    Payment is in process...
                  </button>
                ) : (
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4 block mx-auto"
                    onClick={handlePayment}
                  >
                    Payment Done!
                  </button>
                )}
              </div>
            </div>
            <ExamSummary />
          </div>
        )}

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 block mx-auto"
          onClick={handleReset}
        >
          Reset Payment
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ExamPayment;
