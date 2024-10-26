import axios from "axios";
import moment from "moment-timezone";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import API_CONFIG from "../Config/apiLink";
import LoaderSkeleton from "../Layout/LoaderSkeleton";
import CountDown from "./CountDown";


const ExamSummary = ({ showTimer, payment }) => {
  const [examSummary, setExamSummary] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const handleClick = (examId) => {
    navigate('/exam', { state: { examId } });
  };


  const calculateTimeLeft = (examDate, examTime) => {
    // Fetch the current time in IST
    const currentTime = moment().tz("Asia/Kolkata");

    // Combine examDate and examTime to create a moment object
    const examDateTime = moment(
      `${examDate} ${examTime}`,
      "YYYY-MM-DD HH:mm"
    ).tz("Asia/Kolkata");

    // Calculate the difference between the examDateTime and currentTime
    const difference = examDateTime.diff(currentTime);

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(moment.duration(difference).asDays()),
        hours: moment.duration(difference).hours(),
        minutes: moment.duration(difference).minutes(),
        seconds: moment.duration(difference).seconds(),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    //fetch exam summary
    setLoading(true);
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      //console.log(`${API_CONFIG.BASE_URL}/api/exam-summary/${user.id}`)
      axios
        .get(`${API_CONFIG.BASE_URL}/api/exam-summary/${user.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json", // Assuming you're sending JSON data
          },
        })
        .then((response) => {
          console.log(response.data);
          setLoading(false);
          setExamSummary(response.data["data"]);
          setTotalPrice(response.data["total_price"]);
          
          // console.log(response.data['total_price'])
        });
    } catch (error) {
      console.error("Error fetching exam summary:", error);
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <>
      {loading ? (
        <LoaderSkeleton />
      ) : (
        <div className="md:w-2/3 w-full md:flex-col md:p-5">
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4">
            {           
            
            examSummary
            .filter((exam) => (payment ? exam.payment == 1 : exam))
            .map((exam, index) => {
            //console.log(payment);
              // Combine examDate and examTime to create a moment object
              const examDateTime = moment(
                `${exam.test_date} ${exam.test_time}`,
                "YYYY-MM-DD HH:mm"
              ).tz("Asia/Kolkata");
              // Get the current time in IST
              const currentTime = moment().tz("Asia/Kolkata");

              // Check if the examDateTime is after the currentTime
              const isExamInFuture = examDateTime.isBefore(currentTime);
              //console.log(isExamInFuture);

              // Calculate the time left for the exam
              const timeLeft = calculateTimeLeft(
                exam.test_date,
                exam.test_time
              );

              return (
                <div key={index} className="mb-4">
                  <h2 className="text-xl font-semibold mb-2">
                    Test Chapter: {exam.detail.chapter_name}
                  </h2>
                  <p className="mb-1">Test Code: {exam.test_code}</p>
                  <p className="mb-1">Test Date: {exam.test_date}</p>
                  {/* <p className="mb-1">Test cart: {exam.student_exam_combo_id} == {exam.paymentCart.exam_cart_id}</p> */}
                  <p className="mb-1">Test Time: {exam.test_time}</p>
                  <p className="mb-1">Test Price: {exam.test_price}</p>
                  <p className="mb-1">
                    Test Payment Status:
                    <span
                      className={`${
                        exam.payment == 0 ? "text-red-600" : (exam.paymentCart["payment_status"] == 1) ? "text-yellow-600": "text-green-600"
                      }`}
                    >
                      {exam.payment == 0 ? "Unpaid" : (exam.paymentCart["payment_status"] == 1) ? "Payment Under Process" : "Paid"}
                    </span>
                  </p>

                  {showTimer &&
                    (isExamInFuture ? (
                      <div className="mt-4">
                        
                        <button onClick={() => handleClick(exam.exam_id)}
                                        
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                           Start Exam
                        </button>
                      </div>
                    ) : (
                      <div className="mt-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Time Left for Exam:{" "}
                          <CountDown
                            examDate={exam.test_date}
                            examTime={exam.test_time}
                          />
                        </button>
                      </div>
                    ))}

                  <hr className="my-2" />
                </div>
              );
            })}
            {
totalPrice ? (
  <div className="text-left mt-4">
              <p className="text-lg font-bold text-purple-600">
                Amount to be Paid:{" "}
                <span style={{ color: "red", fontSize: "25px" }}>
                  ₹{totalPrice}
                </span>{" "}
              </p>
            </div>

) : ""

            }
            


          </div>
        </div>
      )}
    </>
  );
};

export default ExamSummary;
