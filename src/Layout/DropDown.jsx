import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const DropDown = (props) => {
  //console.log(props.user);
  const userType = props.user.user_type;
  
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
      // Clear the access token from localStorage upon logout
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      localStorage.removeItem('userType');
      localStorage.removeItem('isProfileComplete');
  
      // Redirect to the login page after logout
      navigate('/');
    };
   //console.log(localStorage.getItem('isProfileComplete') === 'true');
   const isProfileComplete = localStorage.getItem('isProfileComplete') === 'true';
  
    // Close the dropdown when clicked outside
//     useEffect(() => {
//       const handleOutsideClick = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//           setIsOpen(false);
//         }
//       };
//   
//       document.addEventListener('mousedown', handleOutsideClick);
//   
//       return () => {
//         document.removeEventListener('mousedown', handleOutsideClick);
//       };
//     }, []);
  

  
    return (
      <div className="relative inline-block text-left" onMouseEnter={() => setIsOpen(true)} >
        <button className="hover:text-white md:hover:text-[#539165] transition-all cursor-pointer focus:outline-none" 
       onClick={() => setIsOpen(!isOpen)}
        >
          {props.user? props.user.name : "user"} <span>&#9662;</span>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-60 bg-white rounded shadow-lg py-2 ">
            {
  userType === 'students' && (
    <>
   
      <Link to="/student-profile-view" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
        View Profile
      </Link>
      {!isProfileComplete && (
        <Link to="/add-student-profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Add Profile
        </Link>
      )}
     
    </>
  )
 }
 {
   userType === 'teachers' && (
    <>
      <Link to="/tutor-profile-view" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
        View Profile
      </Link>

      {!isProfileComplete && (
       <Link to="/add-tutor-profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
       Add Profile
     </Link>
      )}
      
    </>
  )
 }
            {/* <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              Profile
            </Link> */}
            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    );
  };


export default DropDown


  

