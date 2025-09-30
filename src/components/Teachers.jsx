import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API_CONFIG from '../Config/apiLink';
import Heading from '../Layout/Heading';
import LoaderSkeleton from '../Layout/LoaderSkeleton';
import TeacherCard from '../Layout/TeacherCard';

const Teachers = () => {
  const [loading, setLoading] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [displayedTeachers, setDisplayedTeachers] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const getTeachers = async() => {

    setLoading(true);
    try {
      //const token = TOKENS.accessToken;
      //console.log(token);
     
        const response = await axios.get(`${API_CONFIG.BASE_URL}/api/get-teachers`)
        if (response.status === 200) {

          console.log(response.data['teachers']);
          const teachersData = response.data['teachers'];
          setTeachers(teachersData);
          setDisplayedTeachers(teachersData.slice(0, 8)); // Show only first 8 teachers (2 rows)
          setLoading(false);

        } 
      
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false); // Set loading back to false after login attempt
    }

  }
 

  const handleLoadMore = () => {
    setDisplayedTeachers(teachers);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setDisplayedTeachers(teachers.slice(0, 8));
    setShowAll(false);
  };

  useEffect(()=>{

    getTeachers();
  },[]);


  return (

  <>
  {loading ? (
    <LoaderSkeleton />
  ) : (
    <div className="flex flex-col items-center md:px-3 px-5">
      <div className="w-full flex justify-between items-center mt-10 md:mt-0">
        <h3 className="text-2xl md:text-4xl font-semibold">
          Our Verified <span className="text-brightGreen">Tutors</span>
        </h3>
        <div className="ml-auto">
          <Link
            to="/all-tutors"
            className="py-1 px-2 md:px-4 rounded-full outline transition-all hover:bg-[#539165] hover:text-white hover:shadow-md"
          >
            View All
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 max-w-7xl mx-auto">
        {Array.isArray(displayedTeachers) && displayedTeachers.length > 0 && (
          displayedTeachers.map((teacher, index) => (
            teacher.profile && teacher.profile.length > 0 && (
              <div key={index} className="h-full">
                <TeacherCard
                  img={teacher.profile[0].profile_pic ? `${API_CONFIG.BASE_URL}/${teacher.profile[0].profile_pic}` : ''}
                  title={teacher.profile[0].register_id}
                  specialisation={teacher.profile[0].specialisation}
                  preferred_subject={teacher.profile[0].preferred_subject}
                  highest_qualification={teacher.profile[0].highest_qualification}
                />
              </div>
            )
          ))
        )}
      </div>

      {/* Load More/Show Less Button */}
      {teachers.length > 8 && (
        <div className="mt-6">
          {!showAll ? (
            <button
              onClick={handleLoadMore}
              className="py-2 px-6 rounded-full bg-[#539165] text-white border border-gray-300 hover:bg-white hover:text-green-600 hover:border-transparent hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Load More
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="py-2 px-6 rounded-full bg-gray-500 text-white border border-gray-300 hover:bg-white hover:text-gray-600 hover:border-transparent hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  )}

  </>  


  )
}

export default Teachers
