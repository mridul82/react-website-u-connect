import React from 'react'
import { Link } from 'react-router-dom'

const TeacherCard = (props) => {
  const accessToken = localStorage.getItem("accessToken");
  const isProfileComplete = localStorage.getItem('isProfileComplete') === 'true';

  const handleContactClick = () => {
    if (!accessToken) {
      // Redirect to login if not authenticated
      window.location.href = '/login';
      return;
    }

    if (!isProfileComplete) {
      // Redirect to student profile creation if profile not complete
      window.location.href = '/add-student-profile';
      return;
    }

    // Handle contact teacher logic here (future implementation)
    console.log('Contact teacher:', props.title);
  };

  const getButtonText = () => {
    if (!accessToken) return 'Login to Contact';
    if (!isProfileComplete) return 'Complete Profile to Contact';
    return 'Contact Teacher';
  };

  const getButtonIcon = () => {
    if (!accessToken || !isProfileComplete) {
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
    }
    return (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 p-6 w-full h-full flex flex-col">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 relative rounded-full overflow-hidden border-4 border-blue-100 shadow-md flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            src={props.img}
            alt="Teacher Profile"
            loading="lazy"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/80x80/e5e7eb/6b7280?text=No+Image";
            }}
          />
        </div>
      </div>

      {/* Teacher Information */}
      <div className="text-center space-y-3 flex-grow flex flex-col">
        <h2 className="text-lg font-bold text-gray-800">
          ID: {props.title}
        </h2>

        <div className="space-y-2 text-sm flex-grow">
          <div className="bg-blue-50 p-2 rounded-lg">
            <span className="font-semibold text-blue-700">Specialization:</span>
            <p className="text-gray-700 mt-1 line-clamp-2">{props.specialisation || 'Not specified'}</p>
          </div>

          <div className="bg-green-50 p-2 rounded-lg">
            <span className="font-semibold text-green-700">Qualification:</span>
            <p className="text-gray-700 mt-1 line-clamp-2">{props.highest_qualification || 'Not specified'}</p>
          </div>

          <div className="bg-purple-50 p-2 rounded-lg">
            <span className="font-semibold text-purple-700">Subjects:</span>
            <p className="text-gray-700 mt-1 line-clamp-2">{props.preferred_subject || 'Not specified'}</p>
          </div>
        </div>

        {/* Contact Button */}
        <div className="mt-auto pt-4 border-t border-gray-200">
          <button
            onClick={handleContactClick}
            className={`w-full py-2 px-4 rounded-lg transition-all duration-200 font-medium flex items-center justify-center space-x-2 ${
              accessToken && isProfileComplete
                ? 'bg-gradient-to-r from-[#539165] to-green-600 text-white hover:from-green-600 hover:to-green-700'
                : 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700'
            }`}
          >
            {getButtonIcon()}
            <span>{getButtonText()}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TeacherCard