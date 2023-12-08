import React, { useEffect, useState } from 'react';
import Navbar from '../NavBar';

import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { config_header } from '../Login/constants/apiHeader';

const Tutors = () => {
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);

  const navigate = useNavigate(); // For navigation in React Router v6
  const location = useLocation();

  // Extract user data from location state
  const userData = location.state && location.state.userData;
  //console.log(userData);

  useEffect(() => {    

    const getProfile = async() => {
      const response = await axios.get('http://localhost:8000/api/teacher-profile', config_header)
      if(response.status === 200){
        console.log(response.data);
        setProfileData(response.data);
      }
    }
   getProfile()
  }, []);

  const handleLogout = () => {
    // Clear the access token from localStorage upon logout
    localStorage.removeItem('accessToken');

    // Redirect to the login page after logout
    navigate('/');
  };


  return (
    <>
       <Navbar />

       <div>
      <h1>Welcome to Dashboard</h1>
      {profileData && (
     
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="flex justify-center p-6">
        <img
          src={profileData.imageUrl}
          alt="Profile"
          className="rounded-full h-32 w-32 object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">{profileData.profile.teacher['name']}</h2>
        <p className="text-lg text-gray-700 mb-4">Phone: {profileData.profile.whatapp_no}</p>
        <p className="text-lg text-gray-700 mb-4">Locality: {profileData.profile.area_locality}</p>
      </div>
    </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
    </>

  )
}

export default Tutors