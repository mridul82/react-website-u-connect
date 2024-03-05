import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_CONFIG from '../Config/apiLink';
import TOKENS from '../Config/localStorage';


const ExamSummary = () => {
    const [examSummary, setExamSummary] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect (() => {
        //fetch exam summary
        try {
            const user = TOKENS.user;
            console.log(`${API_CONFIG.BASE_URL}/api/exam-summary/${user.id}`)
            axios.get(`${API_CONFIG.BASE_URL}/api/exam-summary/${user.id}`, {        
                headers: {
                  'Authorization': `Bearer ${TOKENS.accessToken}`,
                  'Content-Type': 'application/json', // Assuming you're sending JSON data
                }
            })
            .then(response => {
                console.log(response.data);
                setExamSummary(response.data['data']);
                setTotalPrice(response.data['total_price']);
               // console.log(response.data['total_price'])
            })
            
        } catch (error) {
            console.error('Error fetching exam summary:', error);
        }
      
    }, []);
  return ( 
    
     <>
     
      <div className="md:w-2/3 w-full md:flex-col md:p-5">
   
   <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4">
     {examSummary.map((exam, index) => (
       <div key={index} className="mb-4">
         <h2 className="text-xl font-semibold mb-2">Test Chapter: {exam.detail.chapter_name}</h2>
         <p className="mb-1">Test Code: {exam.test_code}</p>
         <p className="mb-1">Test Date: {exam.test_date}</p>
         <p className="mb-1">Test Time: {exam.test_time}</p>
         <p className="mb-1">Test Price: {exam.test_price}</p>
         {/* Render other exam details as needed */}
         <hr className="my-2" />
       </div>
     ))}
     {/* Total price section */}
     <div className="text-left mt-4">
       <p className="text-lg font-bold text-purple-600">Total Price: ₹{totalPrice}</p>
     </div>
   </div>
 </div>
     </>
      
   

   
  )
}

export default ExamSummary
