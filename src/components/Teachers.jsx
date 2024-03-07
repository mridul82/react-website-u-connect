import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_CONFIG from '../Config/apiLink';
import TOKENS from '../Config/localStorage';
import Heading from '../Layout/Heading';
import LoaderSkeleton from '../Layout/LoaderSkeleton';
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
          const response = await axios.get(`${API_CONFIG.BASE_URL}/api/get-teachers`)
          if (response.status === 200) {
           
            //console.log(response.data['teachers']);
            setTeachers(response.data['teachers']);
            setLoading(false);
           
          }
        }
        
      } catch (error) {
        
      }finally {
        setLoading(false); // Set loading back to false after login attempt
      }

    }
   

    getTeachers();
  },[]);


  return (

  <>
  {loading ? (
    <LoaderSkeleton />
  ) : (
    <div className=" flex flex-col items-center md:px-3 px-5">
    <Heading title1="Our Approved" title2="Teacher" />
    
        <div className="flex flex-wrap justify-center mt-2">
      
        {Array.isArray(teachers) && teachers.length > 0 && (
          teachers.map((teacher, index) => (
            teacher.profile && teacher.profile.length > 0 && teacher.profile[0].profile_pic && (
              <TeacherCard 
                key={index} 
                img={`${API_CONFIG.BASE_URL}/${teacher.profile[0].profile_pic}`} 
                title={teacher.profile[0].register_id} 
                specialisation={teacher.profile[0].specialisation}
                preferred_subject={teacher.profile[0].preferred_subject}
                highest_qualification={teacher.profile[0].highest_qualification}
              />
            )
          ))
        )}
     
    </div>   
    
  </div>
  )}

  </>  


  )
}

export default Teachers
