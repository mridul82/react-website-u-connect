import axios from "axios";
import React, { useState } from "react";
import API_CONFIG from "../Config/apiLink";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Layout/Loader";

const Cart = ({ cartExams }) => {
  // State variables to store the selected date and time
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

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
    //console.log(user);
    //console.log({cartExams, totalPrice, user, selectedDate, selectedTime});
    const postData = {
      cartExams,
      totalPrice,
      user,
      selectedDate,
      selectedTime,
    };

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
        navigate('/exam-payment');
        console.log(response.data);
      }
    } catch (error) {
      if (error.response.status === 400) {
        
        toast.error(error.response.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } finally {
      setLoading(false); // Set loading back to false after login attempt
    }
  };
  // Calculate total price
  const totalPrice = cartExams.reduce(
    (acc, exam) => acc + Number(exam.test_price),
    0
  );


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
                  Total Price: ₹{totalPrice}
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
