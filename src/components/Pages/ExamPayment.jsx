import axios from "axios";
import React, { useEffect, useState } from "react";
import API_CONFIG from "../../Config/apiLink";
import ExamSummary from "../ExamSummary";
import Footer from "../Footer";

import Loader from "../../Layout/Loader";
import PaymentProcessModal from "../Modals/PaymentProcessModal";
import PaymentCompleteModal from "../Modals/paymentCompleteModal";
import NavBar from "../NavBar";

const ExamPayment = () => {
  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  

  useEffect(() => {
    const getPayemntStatus = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const response = await axios.get(
          `${API_CONFIG.BASE_URL}/api/exam-payment-status/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              "Content-Type": "application/json", // Assuming you're sending JSON data
            },
          }
        );

        if (response.status === 200) {
          // console.log(response.data.data['payment_status']);
          const storedPaymentStatus = localStorage.getItem("paymentStatus");
          //console.log(storedPaymentStatus);
          if (response.data.data["payment_status"] === 2) {
            localStorage.setItem("paymentStatus", false);

            setPayment(false);
            setPaymentComplete(true);
          } else if (response.data.data["payment_status"] === 1) {
            localStorage.setItem("paymentStatus", true);

            setPayment(true);
            setPaymentComplete(false);
          }
        }
      } catch (error) {}
    };

    getPayemntStatus();
    //  const storedPaymentStatus = localStorage.getItem("paymentStatus");
    //   console.log(storedPaymentStatus);
    //   if (storedPaymentStatus === "true") {
    //     setPayment(true);
    //   }
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handlePayment = async () => {
    setLoading(true);
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(localStorage.getItem("accessToken"));
      axios
        .get(`${API_CONFIG.BASE_URL}/api/exam-payment/${user.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json", // Assuming you're sending JSON data
          },
        })
        .then((response) => {
          //setLoading(false);
          // console.log(response.data.data);
          // console.log(response.data.inserted_payments);
          if (
            response.data.inserted_payments &&
            response.data.inserted_payments !== null
          ) {
            localStorage.setItem("paymentStatus", true);
            setPayment(true);
          }
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    //localStorage.setItem('isProfileComplete', isProfileComplete);
  };

 

  useEffect(() => {
    // handlePayment();
  }, []);

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
                  
                  <div className="flex justify-center space-x-4 mt-4">
                    <PaymentProcessModal />
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-4 block mx-auto"
                      disabled
                    >
                      Payment is in process...
                    </button>
                    <button
                      className="bg-white-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-xs"
                      onClick={handleRefresh}
                    >
                      <svg
                        fill="#000000"
                        height="20px"
                        width="20px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 383.748 383.748"
                        xml:space="preserve"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g>
                            {" "}
                            <path d="M62.772,95.042C90.904,54.899,137.496,30,187.343,30c83.743,0,151.874,68.13,151.874,151.874h30 C369.217,81.588,287.629,0,187.343,0c-35.038,0-69.061,9.989-98.391,28.888C70.368,40.862,54.245,56.032,41.221,73.593 L2.081,34.641v113.365h113.91L62.772,95.042z"></path>{" "}
                            <path d="M381.667,235.742h-113.91l53.219,52.965c-28.132,40.142-74.724,65.042-124.571,65.042 c-83.744,0-151.874-68.13-151.874-151.874h-30c0,100.286,81.588,181.874,181.874,181.874c35.038,0,69.062-9.989,98.391-28.888 c18.584-11.975,34.707-27.145,47.731-44.706l39.139,38.952V235.742z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </button>
                  </div>
                ) : 
                
                
                  paymentComplete  ? 

                  (
                    <>
                     <div className="flex justify-center space-x-4 mt-4">

                    <PaymentCompleteModal />
                          <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 block mx-auto"
                    onClick={handlePayment}
                  >
                    Payment Completed!
                  </button>
                     </div>
           
                    </>

              
                  ):
              
                (
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4 block mx-auto"
                    onClick={handlePayment}
                  >
                    Payment Done!
                  </button>
                )
                
                
                
                }
              </div>
            </div>
            <ExamSummary />
          </div>
        )}

        {/* <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 block mx-auto"
          onClick={handleReset}
        >
          Reset Payment
        </button> */}
      </div>
      <Footer />
    </>
  );
};

export default ExamPayment;
