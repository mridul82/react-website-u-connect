import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ExamInstruction from './ExamInstruction';
import ExamPaper from './ExamPaper';

import { useLocation, useNavigate } from 'react-router-dom';
import API_CONFIG from '../Config/apiLink';


const Exam = () => {

  const location = useLocation();
 const examId = location.state?.examId; 

 const navigate = useNavigate();


   //console.log('Exam ID:', examId);
   // const [examInstructions, setExamInstructions] = useState('');
  // const [examTimer, setExamTimer] = useState(0);
  const [examStarted, setExamStarted] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [examTimer, setExamTimer] = useState(() => {
    const startTime = localStorage.getItem('examStartTime');
    if (startTime) {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Convert milliseconds to seconds
      return Math.max(3600 - elapsedTime, 0); // Timer in seconds (60 minutes = 3600 seconds)
    } else {
      return 3600; // Initial timer value if not set
    }
  }); // Timer in minutes
  const [buttonColor, setButtonColor] = useState('blue'); // Default button color


  useEffect(() => {
    let timer;

    if (examStarted) {
      localStorage.setItem('examStartTime', Date.now());
      timer = setInterval(() => {
        setExamTimer(prevTimer => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            clearInterval(timer);
            localStorage.removeItem('examStartTime'); // Remove exam start time from local storage
            handleStopExam(examId); // Auto-submit when timer ends
            return 0;
          }
        });
      }, 1000); // Update timer every second (1000 milliseconds)
    }

    return () => clearInterval(timer);
  }, [examStarted, examId]);


  useEffect(() => {
    // Change button color based on timer value
    if (examTimer <= 600) {
      setButtonColor('red'); // Change button color to red when less than or equal to 10 minutes
    } else if (examTimer <= 1200) {
      setButtonColor('yellow'); // Change button color to yellow when less than or equal to 20 minutes
    } else {
      setButtonColor('blue'); // Reset button color to blue for other times
    }
  }, [examTimer]);


    const handleStartExam = async (id) => {
      setExamStarted(true);
      setStartTime(Date.now()); // Record the start time
        setExamStarted(true);
       // console.log(`Starting exam with ID: ${id}`);

        try {

          const response = await axios.get(`${API_CONFIG.BASE_URL}/api/exampaper/${id}`
          ,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              "Content-Type": "application/json", // Assuming you're sending JSON data
            },
          }
        );
          console.log(response.data.data["exam_paper_link"]);
          setPdfUrl(response.data.data["exam_paper_link"])
          
        } catch (error) {
          console.error('Error fetching exam data:', error);
        }     


       // const fakePdfUrl = `${API_CONFIG.BASE_URL}/student/exam/8/MAINCONTENTSAMPLE.pdf`;
      //  const fakePdfUrl = 'https://drive.google.com/file/d/1xPxwJgdILXwI-e41MwKxiftxt0XCW_ew/preview'
         //console.log(pdfUrl);
      //   setPdfUrl(fakePdfUrl);
      };

      const handleStopExam = (id) => {
        setExamStarted(false);
        if (!startTime) {
          alert('Please start the exam first.');
          return;
        }
        const confirmation = window.confirm('Are you sure you want to finsh the exam?');
        if (confirmation) {
          const endTime = Date.now();
    const durationInMilliseconds = endTime - startTime;
    const durationInMinutes = Math.floor(durationInMilliseconds / (1000 * 60));
    const durationInSeconds = Math.floor((durationInMilliseconds / 1000) % 60);

    // Format the duration into HH:MM:SS format
    const formattedDuration = `${durationInMinutes}:${durationInSeconds < 10 ? '0' : ''}${durationInSeconds}`;
    alert(`Exam duration: ${formattedDuration} minutes`);
          // Navigate to the exam details page using the navigate function
          navigate(`/exam-submit`, { state: {examId: examId, duration: formattedDuration } });
        }
      }


        // Convert seconds to minutes and seconds
  const minutes = Math.floor(examTimer / 60);
  const seconds = examTimer % 60;


      
  return (
 
<div className="min-h-screen flex flex-col">
  <div className="exam-instructions flex-grow overflow-y-auto">
    {
      examStarted === true ? (
        <ExamPaper pdfUrl={pdfUrl} />
      ) : 
      (
        <ExamInstruction />
      )
    }
   
  </div>

  <div className="bottom-bar bg-[#539165] py-3 px-4 md:py-4 md:px-6 shadow-md fixed bottom-0 left-0 right-0">
      {!examStarted ? (
        <button
          className={`bg-${buttonColor}-500 hover:bg-${buttonColor}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          onClick={() => handleStartExam(examId)}
        >
          Start Exam
        </button>
      ) : (
        <div className="timer text-xl">
          <button
            className={`flex float-left bg-${buttonColor}-500 hover:bg-${buttonColor}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            
          >
            Time Remaining: {minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds} To
            Finish Exam
          </button>
        
          <button
            className={`flex float-right bg-${buttonColor}-500 hover:bg-${buttonColor}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            onClick={() => handleStopExam(examId)}
          >
            
            Finish Exam
          </button>
        </div>
      )}
    </div>
</div>
 
  )
}

export default Exam
