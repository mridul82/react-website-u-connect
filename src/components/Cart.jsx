import axios from "axios";
import { useState } from "react";
import API_CONFIG from "../Config/apiLink";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Layout/Loader";

const Cart = ({ cartExams }) => {
  // State variables to store the selected date and time
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [couponCode, setCouponCode] = useState("");
const [discountApplied, setDiscountApplied] = useState(false);
const [finalPrice, setFinalPrice] = useState(0);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Handler functions to update the selected date and time
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleConfirmTest = async (e) => {
    e.preventDefault();
    // You can perform any action with the selected date and time here
    setLoading(true);

    const user = JSON.parse(localStorage.getItem("user"));
    //console.log(user);discountApplied
    console.log({cartExams, totalPrice, user, selectedDate, selectedTime});
    const postData = {
      cartExams,
      totalPrice: discountApplied ? finalPrice : totalPrice,
      user,
      selectedDate,
      selectedTime,
    };

//     console.log(postData);
// console.log(`Bearer ${localStorage.getItem("accessToken")}`);
    try {
      const response = await axios.post(
        `${API_CONFIG.BASE_URL}/api/add-exam`,
        postData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json", // Assuming you're sending JSON data
          },
        }
      );
      if (response.status == 200) {
        console.log(response.data);
        
        // Check if exams were automatically paid via coupon
        if (response.data.coupon_payment_applied) {
          // Show success message and redirect to student profile
          toast.success("Exams registered successfully! Payment completed via coupon.", {
            position: toast.POSITION.TOP_CENTER,
          });
          // Redirect to student profile page instead of payment page
          setTimeout(() => {
            navigate('/student-profile-view');
          }, 2000);
        } else {
          // Normal flow - redirect to payment page
          navigate('/exam-payment');
        }
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        
        toast.error(error.response.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } finally {
      setLoading(false); // Set loading back to false after login attempt
    }
  };

  // Function to apply coupon via API
const handleApplyCoupon = async () => {
  if (!couponCode.trim()) {
    toast.error("Please enter a coupon code", {
      position: toast.POSITION.TOP_CENTER,
    });
    return;
  }

  try {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      toast.error("Please login to apply coupon", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    const currentTotalPrice = cartExams.reduce((acc, exam) => acc + Number(exam.test_price), 0);

    const response = await axios.post(
      `${API_CONFIG.BASE_URL}/api/student/apply-coupon`,
      {
        code: couponCode.trim(),
        cart_amount: currentTotalPrice
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      const { discount_percentage, message } = response.data;
      
      setDiscountApplied(true);
      
      if (discount_percentage === 100) {
        setFinalPrice(0);
        toast.success("Coupon Applied! Cart total is now ₹0", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        const discountAmount = (currentTotalPrice * discount_percentage) / 100;
        const newFinalPrice = currentTotalPrice - discountAmount;
        setFinalPrice(newFinalPrice);
        toast.success(`Coupon Applied! ${discount_percentage}% discount applied. New total: ₹${newFinalPrice}`, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  } catch (error) {
    console.error("Coupon application error:", error);
    if (error.response?.status === 400) {
      toast.error(error.response.data.message || "Invalid or already used coupon", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error("Error applying coupon. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }
};

// Calculate total price
const totalPrice = cartExams.reduce((acc, exam) => acc + Number(exam.test_price), 0);
const displayPrice = discountApplied ? finalPrice : totalPrice;
  // Calculate total price
  // const totalPrice = cartExams.reduce(
  //   (acc, exam) => acc + Number(exam.test_price),
  //   0
  // );


  return (
    <div className=" md:w-1/3 w-full md:flex-col md:p-5">
       <ToastContainer />
      <div className="bg-white p-4 mb-4 border border-gray-300 rounded-lg shadow-lg">
        {loading ? 
        (
          <Loader />
        ) :
        (
          <>
                   <h2 className="text-xl font-semibold mb-2">Exams</h2>
          <table>
            <tbody className="px-3 py-5">
              {cartExams.map((exam, index) => (
                <tr key={index}>
                  <td>{exam.chapter_name}</td>
                  <td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </td>
                  <td>₹{exam.test_price}</td>
                </tr>
              ))}
  
              <tr>
                <td></td>
                <td colSpan="3" className="font-semibold">
                  {discountApplied ? (
                    <>
                      <div className="text-sm text-gray-500 line-through">Original: ₹{totalPrice}</div>
                      <div className="text-green-600">Final Price: ₹{displayPrice}</div>
                    </>
                  ) : (
                    <>Total Price: ₹{totalPrice}</>
                  )}
                </td>
              </tr>
  
              <tr>
                <div>
                  <td>
                    {" "}
                    <h2>Choose Exam Date and Time</h2>
                  </td>
  
                  <form onSubmit={handleConfirmTest}>
                    <div className="m-4">
                      <label htmlFor="examDate">Select Exam Date:</label>
  
                      <input
                        type="date"
                        id="examDate"
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        value={selectedDate}
                        onChange={handleDateChange}
                        required
      title="Please select an exam date" 
                      />
                    </div>
                    <div>
                      <label htmlFor="examTime">Select Exam Time:</label>
  
                      <input
                        type="time"
                        id="examTime"
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        value={selectedTime}
                        onChange={handleTimeChange}
                        required
      title="Please select an exam time"
                      />
                    </div>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4 block mx-auto"
                      type="submit"
                    >
                      {" "}
                      Confirm Tests
                    </button>
                  </form>
                </div>
              </tr>
              <tr>
                <td colSpan="3">
                  <div className="my-4">
                    <label htmlFor="coupon">Have a Coupon?</label>
                    <div className="flex gap-2 mt-1">
                      <input
                        type="text"
                        id="coupon"
                        className="p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <button
                        type="button"
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                        onClick={handleApplyCoupon}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          </>
 

        )
        
        }
       
      </div>
    </div>
  );

};

export default Cart;
