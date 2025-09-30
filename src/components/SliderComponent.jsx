import React from 'react';
import { Link } from 'react-router-dom';

const SliderComponent = () => {

  const accessToken = localStorage.getItem("accessToken");
  const isProfileComplete = localStorage.getItem('isProfileComplete') === 'true';
  //console.log(accessToken);

  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-yellow-400 rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center md:mx-25 mx-5 py-8 relative z-10">
        {/* Modern Illustration Section */}
        <div className="w-full md:w-2/3 p-3 m-5 flex justify-center items-center">
          <div className="relative w-full max-w-lg">
            {/* Main Illustration Container */}
            <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              {/* Education Icons Floating Around */}
              <div className="relative">
                {/* Central Figure - Modern Illustration */}
                <div className="text-center space-y-6">
                  {/* Animated Book Icon */}
                  <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4V22C14 22.6 13.6 23 13 23H11C10.4 23 10 22.6 10 22V4C10 2.9 10.9 2 12 2ZM19 7V20C19 21.1 18.1 22 17 22H15V7H19ZM9 7V22H7C5.9 22 5 21.1 5 20V7H9Z"/>
                    </svg>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="absolute -top-2 -right-6 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-2 w-10 h-10 bg-purple-400 rounded-full opacity-70"></div>
                  <div className="absolute -bottom-2 -right-4 w-7 h-7 bg-green-400 rounded-full animate-bounce delay-300"></div>

                  {/* Text Elements */}
                  <div className="space-y-3">
                    <div className="flex justify-center space-x-2">
                      <div className="w-16 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
                      <div className="w-12 h-2 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full"></div>
                    </div>
                    <div className="flex justify-center space-x-2">
                      <div className="w-20 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <div className="w-8 h-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Subject Icons Around */}
                <div className="absolute top-0 left-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-blue-600 font-bold text-xs">Math</span>
                </div>
                <div className="absolute top-8 right-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-green-600 font-bold text-xs">Sci</span>
                </div>
                <div className="absolute bottom-0 left-4 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-purple-600 font-bold text-xs">Eng</span>
                </div>
                <div className="absolute bottom-8 right-4 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-yellow-600 font-bold text-xs">Art</span>
                </div>
              </div>
            </div>
          </div>
        </div>
       <div className="md:w-2/4 text-center md:text-left space-y-6">
         <h4 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
           Empowering minds, illuminating futures
         </h4>
         <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg border-l-4 border-brightGreen">
           <span className="text-brightGreen font-semibold text-lg italic">
             "Join Urja Connect for a boundless journey of learning and growth!"
           </span>
         </div>

         <p className="text-gray-600 mt-5 text-base md:text-lg leading-relaxed">
           Urja Connect is your gateway to a world of limitless learning possibilities.
           With our cutting-edge eLearning platform, you can search your best curated tutor, a vast
           library of courses, from academic subjects to practical skills, all
           designed to help you achieve your goals.
         </p>

         <div className='flex flex-wrap gap-4 mt-8 justify-center md:justify-start'>
{accessToken ? (

  isProfileComplete ? (

           <Link to="/find-tutor"
             className="py-3 px-6 rounded-full transition-all duration-300 bg-gradient-to-r from-[#539165] to-green-600 text-white border border-transparent hover:from-white hover:to-white hover:text-green-600 hover:border-green-600 hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 font-semibold"
           >
             <span>Find Tutors</span>
             <svg
               fill="currentColor"
               viewBox="0 0 16 16"
               height="1.2em"
               width="1.2em"
             >
               <path
                 fillRule="evenodd"
                 d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
               />
             </svg>
           </Link>

  ) : (
           <Link to="/add-student-profile"
             className="py-3 px-6 rounded-full transition-all duration-300 bg-gradient-to-r from-[#539165] to-green-600 text-white border border-transparent hover:from-white hover:to-white hover:text-green-600 hover:border-green-600 hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 font-semibold"
           >
             <span>Find Tutors</span>
             <svg
               fill="currentColor"
               viewBox="0 0 16 16"
               height="1.2em"
               width="1.2em"
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
             className="py-3 px-6 rounded-full transition-all duration-300 bg-gradient-to-r from-[#539165] to-green-600 text-white border border-transparent hover:from-white hover:to-white hover:text-green-600 hover:border-green-600 hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 font-semibold"
           >
             <span>Find Tutors</span>
             <svg
               fill="currentColor"
               viewBox="0 0 16 16"
               height="1.2em"
               width="1.2em"
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
             className="py-3 px-6 rounded-full transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 text-white border border-transparent hover:from-white hover:to-white hover:text-blue-600 hover:border-blue-600 hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 font-semibold"
           >
             <span>Become a Tutor</span>
             <svg
               fill="currentColor"
               viewBox="0 0 16 16"
               height="1.2em"
               width="1.2em"
             >
               <path
                 fillRule="evenodd"
                 d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
               />
             </svg>
           </Link>
  ):(
           <Link to="/login"
             className="py-3 px-6 rounded-full transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 text-white border border-transparent hover:from-white hover:to-white hover:text-blue-600 hover:border-blue-600 hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 font-semibold"
           >
             <span>Become a Tutor</span>
             <svg
               fill="currentColor"
               viewBox="0 0 16 16"
               height="1.2em"
               width="1.2em"
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
             className="py-3 px-6 rounded-full transition-all duration-300 bg-gradient-to-r from-purple-500 to-purple-600 text-white border border-transparent hover:from-white hover:to-white hover:text-purple-600 hover:border-purple-600 hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 font-semibold"
           >
             <span>Register for tests</span>
             <svg
               fill="currentColor"
               viewBox="0 0 16 16"
               height="1.2em"
               width="1.2em"
             >
               <path
                 fillRule="evenodd"
                 d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
               />
             </svg>
           </Link>
  
    ) : (
           <Link to="/add-student-profile"
             className="py-3 px-6 rounded-full transition-all duration-300 bg-gradient-to-r from-purple-500 to-purple-600 text-white border border-transparent hover:from-white hover:to-white hover:text-purple-600 hover:border-purple-600 hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 font-semibold"
           >
             <span>Register for tests</span>
             <svg
               fill="currentColor"
               viewBox="0 0 16 16"
               height="1.2em"
               width="1.2em"
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
             className="py-3 px-6 rounded-full transition-all duration-300 bg-gradient-to-r from-purple-500 to-purple-600 text-white border border-transparent hover:from-white hover:to-white hover:text-purple-600 hover:border-purple-600 hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 font-semibold"
           >
             <span>Enroll for tests</span>
             <svg
               fill="currentColor"
               viewBox="0 0 16 16"
               height="1.2em"
               width="1.2em"
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
    </div>
  );
};

export default SliderComponent;
