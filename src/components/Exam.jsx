import axios from 'axios';
import React, { useState } from 'react';
import ExamInstruction from './ExamInstruction';
import ExamPaper from './ExamPaper';

import { useLocation } from 'react-router-dom';
import API_CONFIG from '../Config/apiLink';


const Exam = () => {

  const location = useLocation();
 const examId = location.state?.examId; 


   console.log('Exam ID:', examId);
   // const [examInstructions, setExamInstructions] = useState('');
  const [examTimer, setExamTimer] = useState(0);
  const [examStarted, setExamStarted] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');


    const handleStartExam = async (id) => {
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
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleStartExam(examId)}>Start Exam</button>
    ) : (
      <div className="timer text-xl">
        Time Remaining: {examTimer} minutes
      </div>
    )}
  </div>
</div>
 
  )
}

export default Exam
