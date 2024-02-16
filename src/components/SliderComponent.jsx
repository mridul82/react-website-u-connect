import React from 'react';
import { Link } from 'react-router-dom';

const SliderComponent = () => {

  const accessToken = localStorage.getItem("accessToken");
  const isProfileComplete = localStorage.getItem('isProfileComplete') === 'true';
  //console.log(accessToken);

  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-25 mx-5 ">
       <div className="  w-full md:w-2/3 p-3 m-5">
      <img src="image_slider/image_slider_5.png" alt="img" style={{ maxHeight: '500px', width: '90%', height: 'auto' }}  loading="lazy" />
    </div>
    <div className=" md:w-2/4 text-center">
      <h4 className=" text-5xl font-semibold leading-tight">
      Empowering minds, illuminating futures </h4>
        <span className="text-brightGreen font-semibold"> "Join Urja Connect for a boundless journey of learning and growth!"</span>
      
      <p className=" text-lightText mt-5 text-start">
      Urja Connect is your gateway to a world of limitless learning possibilities.
        With our cutting-edge eLearning platform, you can search your best curated tutor, a vast
        library of courses, from academic subjects to practical skills, all
        designed to help you achieve your goals.
      </p>

<div className='flex mt-10'>
{accessToken ? (

  isProfileComplete ? (

    <Link to="/find-tutor"
    
    className=" ml-5 py-2 px-5 rounded-full outline transition-all
     bg-[#539165] text-white border border-gray-300 hover:bg-white hover:text-green-600
      hover:border-transparent hover:shadow-lg flex items-center"
  >
   <span className=" text-sm md:font-bold md:text-sm mr-1"> Find Tutors</span>
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
     
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
      />
    </svg>
  </Link>

  ) : (
<Link to="/add-student-profile"
    
    className=" ml-5 py-2 px-5 rounded-full outline transition-all
     bg-[#539165] text-white border border-gray-300 hover:bg-white hover:text-green-600
      hover:border-transparent hover:shadow-lg flex items-center"
  >
   <span className=" text-sm md:font-bold md:text-sm mr-1"> Find Tutors</span>
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
     
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
      />
    </svg>
  </Link>
  )
 
  
  
  
):(
  <Link to="/login"
    
    className=" ml-5 py-2 px-5 rounded-full outline transition-all
     bg-[#539165] text-white border border-gray-300 hover:bg-white hover:text-green-600
      hover:border-transparent hover:shadow-lg flex items-center"
  >
   <span className=" text-sm md:font-bold md:text-sm mr-1"> Find Tutors</span>
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
     
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
      />
    </svg>
  </Link>
)}
{
  accessToken ? (
<Link to="/add-teacher-profile"
    
    className=" ml-5 py-2 px-5 rounded-full outline transition-all
     bg-[#539165] text-white border border-gray-300 hover:bg-white hover:text-green-600 
     hover:border-transparent hover:shadow-lg flex items-center"
  >
   <span className=" text-sm md:font-bold md:text-sm mr-1">Become a Tutor</span>
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
     
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
      />
    </svg>
  </Link>
  ):(
    <Link to="/login"
    
    className=" ml-5 py-2 px-5 rounded-full outline transition-all
     bg-[#539165] text-white border border-gray-300 hover:bg-white hover:text-green-600 
     hover:border-transparent hover:shadow-lg flex items-center"
  >
   <span className=" text-sm md:font-bold md:text-sm mr-1">Become a Tutor</span>
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
     
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
      />
    </svg>
  </Link>
  )
}
{
  accessToken ? (
    isProfileComplete ? (

      <Link to="/student-profile-view"
      
      className=" ml-5 py-2 px-5 rounded-full outline transition-all
       bg-[#539165] text-white border border-gray-300 hover:bg-white hover:text-green-600
        hover:border-transparent hover:shadow-lg flex items-center"
    >
     <span className=" text-sm md:font-bold md:text-sm mr-1"> Register for tests</span>
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
       
      >
        <path
          fillRule="evenodd"
          d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
        />
      </svg>
    </Link>
  
    ) : (
  <Link to="/add-student-profile"
      
      className=" ml-5 py-2 px-5 rounded-full outline transition-all
       bg-[#539165] text-white border border-gray-300 hover:bg-white hover:text-green-600
        hover:border-transparent hover:shadow-lg flex items-center"
    >
     <span className=" text-sm md:font-bold md:text-sm mr-1">Register for tests</span>
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
       
      >
        <path
          fillRule="evenodd"
          d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
        />
      </svg>
    </Link>
    )

// 
// <Link to="/add-student-profile"
//     
//     className=" ml-5 py-2 px-5 rounded-full outline transition-all
//      bg-[#539165] text-white border border-gray-300 hover:bg-white hover:text-green-600 
//      hover:border-transparent hover:shadow-lg flex items-center"
//   >
//    <span className=" text-sm md:font-bold md:text-sm mr-1">Register for tests</span>
//     <svg
//       fill="currentColor"
//       viewBox="0 0 16 16"
//       height="1em"
//       width="1em"
//      
//     >
//       <path
//         fillRule="evenodd"
//         d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
//       />
//     </svg>
//   </Link>
  ):(
    <Link to="/login"
    
    className=" ml-5 py-2 px-5 rounded-full outline transition-all
     bg-[#539165] text-white border border-gray-300 hover:bg-white hover:text-green-600 
     hover:border-transparent hover:shadow-lg flex items-center"
  >
   <span className=" text-sm md:font-bold md:text-sm mr-1">Enroll for tests</span>
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
     
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
      />
    </svg>
  </Link>
  )
}
  
</div>      


      
    </div>

   
  </div>
  );
};

export default SliderComponent;
