import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import API_CONFIG from '../Config/apiLink';

const ExamSubmit = () => {

    

const location = useLocation();
 const { examId, duration } = location.state || {};

 useEffect(() => {
    const fetchExamDetails = async () => {
        const response  = await axios.get(`${API_CONFIG.BASE_URL}/api/exam-submit/${examId}`)
    };
    fetchExamDetails();
 }, [examId])

  return (
    <>
       <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h2 class="text-xl font-bold mb-4">Exam Details</h2>
    <p class="mb-4"><span class="font-bold">Exam ID:</span> {examId}</p>
    <p class="mb-4"><span class="font-bold">Duration:</span> {duration} mins.</p>
    <Link target='_blank' to="https://docs.google.com/forms/d/e/1FAIpQLSdc_CQBbEIKYbtsQXT-ld13SWqbdZI3HTSLREghfCzvuSnFmA/viewform" class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3">
      CLICK HERE TO UPLOAD YOUR ANSWER 
    </Link>
    <p></p>
    
    
  </div>
  <Link to="/student-profile-view" class="bg-gray-700 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-block">
    Go to Profile
  </Link>
    </>
 

  
  )
}

export default ExamSubmit
