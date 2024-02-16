import React from 'react';
import Heading from '../Layout/Heading';
import TestCard from '../Layout/TestCard';

const Test = () => {
  const accessToken = localStorage.getItem("accessToken");
  const isProfileComplete = localStorage.getItem('isProfileComplete') === 'true';
  return (
    <div className=" min-h-[50vh] flex flex-col items-center justify-center md:px-3 px-5 mb-4">
      <Heading title1="Latest" title2="Tests" />

      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <TestCard img="icons/icons8-teacher-100.png" title="Target Boards Test Series" link={accessToken ? (isProfileComplete ? ("student-profile-view") : ("add-student-profile")):("login")} desc="Get board exam ready with Target Boards Test Series! Specially design for Class X and XII exams with precision preparation and expertly crafted practice tests."/>
        <TestCard img="icons/icons8-teacher-100.png" title="Rank Booster Test Series" link={accessToken ? (isProfileComplete ? ("student-profile-view") : ("add-student-profile")):("login")} desc="Accelerate your ranking with our Rank Booster Test! Elevate your performance and excel in exams with targeted practice and strategic preparation."/>
        <TestCard img="icons/icons8-teacher-100.png" title="Advance Test Series" link={accessToken ? (isProfileComplete ? ("student-profile-view") : ("add-student-profile")):("login")} desc="Advance Test series is a comprehensive and specialized examination platform designed to assess and enhance an individual's proficiency in diverse subjects and disciplines."/>
        
    </div>
    </div>
  )
}

export default Test