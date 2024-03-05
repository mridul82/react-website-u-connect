import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_CONFIG from '../Config/apiLink';
import TOKENS from '../Config/localStorage';
import Heading from '../Layout/Heading';
import TeacherCard from '../Layout/TeacherCard';

const Teachers = () => {
  const [loading, setLoading] = useState(false);
  const [teachers, setTeachers] = useState([]);

  useEffect(()=>{

    const getTeachers = async() => {

      setLoading(true);
      try {
        const token = TOKENS.accessToken;
        //console.log(token);
        if(token) {
          const response = await axios.get(`${API_CONFIG.BASE_URL}/api/get-teachers`,  {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json', // Assuming you're sending JSON data
            }
          })
          if (response.status === 200) {
           
            console.log(response.data['teachers']);
            setTeachers(response.data['teachers']);
            setLoading(false);
           
          }
        }
        
      } catch (error) {
        
      }

    }
   

    getTeachers();
  },[]);


  return (
    <div className=" min-h-screen flex flex-col items-center md:px-3 px-5 ">
      <Heading title1="Our" title2="Teacher" />

      <div className=" flex flex-wrap justify-center mt-6">
        <div className="flex md:flex-row flex-col items-center justify-between gap-4 mb-3">
        {Array.isArray(teachers) && teachers.length > 0 && (
      teachers.map((teacher, index) => (
        
      <TeacherCard 
       key={index} 
       img={`${API_CONFIG.BASE_URL}/${teacher.profile[0].profile_pic}`} 
       title={teacher.profile[0].register_id} 
       specialisation = {teacher.profile[0].specialisation}
       preferred_subject = {teacher.profile[0].preferred_subject}
       highest_qualification = {teacher.profile[0].highest_qualification}
     />
       
      ))
    )}
       </div>
        
      </div>
    </div>
  )
}

export default Teachers
