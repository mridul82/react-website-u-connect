import React, { useEffect, useState } from 'react';
import Navbar from '../NavBar';

import { useLocation, useNavigate } from 'react-router-dom';

const Tutors = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate(); // For navigation in React Router v6
  const location = useLocation();

  // Extract user data from location state
  const userData = location.state && location.state.userData;
  //console.log(userData);

  useEffect(() => {
    // Simulating an API call delay (remove this in your actual code)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
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
      {userData && (
        <div>
          <p>User ID: {userData.user.id}</p>
          <p>Name: {userData.user.name}</p>
          <p>Email: {userData.user.email}</p>
          {/* Display other user information as needed */}
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
    </>

  )
}

export default Tutors