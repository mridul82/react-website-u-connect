import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_CONFIG from '../Config/apiLink';
import TOKENS from '../Config/localStorage';

const ExamSummary = () => {
    const [examSummary, setExamSummary] = useState([]);

    useEffect (() => {
        //fetch exam summary
        try {
            const user = TOKENS.user;
            //console.log(user.id)
            axios.get(`${API_CONFIG.BASE_URL}/api/exam-summary/${user.id}`, {        
                headers: {
                  'Authorization': `Bearer ${TOKENS.accessToken}`,
                  'Content-Type': 'application/json', // Assuming you're sending JSON data
                }
            })
            .then(response => {
                console.log(response.data);
                setExamSummary(response.data['data']);
                console.log(examSummary)
            })
            
        } catch (error) {
            console.error('Error fetching exam summary:', error);
        }
      
    }, []);
  return ( 
    <div>
      <h2>Exam Details</h2>
      {examSummary.map((exam, index) => (
        <div key={index}>
          <p>Exam ID: {exam.id}</p>
          <p>Student ID: {exam.student_id}</p>
          <p>Test Code: {exam.test_code}</p>
          <p>Test Date: {exam.test_date}</p>
          <p>Test Time: {exam.test_time}</p>
          <p>Test Price: {exam.test_price}</p>
          {/* Render other exam details as needed */}
          <hr />
        </div>
      ))}
    </div>
  )
}

export default ExamSummary
