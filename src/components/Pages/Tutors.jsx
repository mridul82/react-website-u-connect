import React, { useEffect, useState } from 'react';
import Navbar from '../NavBar';

import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../Layout/Loader';
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
    const getProfile = async () => {
      setLoading(true);
        try {
            const response = await axios.get('http://localhost:8000/api/teacher-profile', config_header);
            if (response.status === 200) {
                console.log(response.data);
                setProfileData(response.data);
            }
        } catch (error) {
            console.error('Error fetching profile data:', error);
        }finally {
          setLoading(false); // Set loading back to false after data fetching (whether success or failure)
      }
    };

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        getProfile();
    }
}, []);

  const handleLogout = () => {
    // Clear the access token from localStorage upon logout
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    localStorage.removeItem('userType');

    // Redirect to the login page after logout
    navigate('/');
  };


  return (
    <>
       <Navbar />

       <div>
     {loading ? (

      <Loader />
     ):(
<div>
{profileData && ( 
     
  <div className="flex max-w-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:translate-y-6 transition duration-300 ease-in-out mt-10">
  <div className="flex justify-between p-6">
    <img
      src={profileData.imageUrl}
      alt="Profile"
      className="rounded-full h-32 w-32 object-cover"
    />
  </div>
  <div className="p-6">
    <h2 className="text-3xl font-bold mb-4">{profileData.profile.teacher['name']}</h2>
    <div className="text-lg text-gray-700 mb-4"><span className=" font-bold">Phone:</span> {profileData.profile.whatapp_no}</div>
    <div className="text-lg text-gray-700 mb-4"><span className=' font-bold '>Locality:</span> {profileData.profile.area_locality}</div>
    <div className="text-lg text-gray-700 mb-4"><span className=' font-bold '>City:</span> {profileData.profile.city}</div>
  </div>
</div>
  )}
</div>

     )}
      
      <button onClick={handleLogout}>Logout</button>
    </div>
    </>

  )
}

export default Tutors