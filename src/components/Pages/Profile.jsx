import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../NavBar";

import Loader from "../../Layout/Loader";

const Profile = () => {
  const navigate = useNavigate();
//   const location = useLocation();
// 
//   const [userType, setUserType] = useState("");

  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState(null);
  
  
  useEffect(() => {
    const getProfile = async () => {
      setLoading(true);
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
         // const apiURL = import.meta.env.VITE_REACT_APP_API_URL; 
          const apiURL = import.meta.env.VITE_REACT_APP_LOCAL_API_URL;
          const response = await axios.get(`${apiURL}/api/student-profile`, {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json', // Assuming you're sending JSON data
            }
          });
          if (response.status === 200) {
            setProfileData(response.data);
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);


//   useEffect(() => {
//     const accessToken = localStorage.getItem("accessToken");
//     console.log(accessToken);
//     if (accessToken) {
//       
//         getProfile();
//       
//     }
//   }, []);
// 
//   const getProfile = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         "http://localhost:8000/api/student-profile",{
//           headers: {
//             'Authorization': `Bearer ${accessToken}`,
//             'Content-Type': 'application/json', // Assuming you're sending form data
//           }
//         }
//        
//       );
//       console.log(response);
//       if (response.status === 200) {
// 
//           setProfileData(response.data);        
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false); // Set loading back to false after data fetching (whether success or failure)
//     }
//   };

  // const onAddProfile = () => {
  //   console.log(userType);
  //   if (userType === "students") {
  //     navigate("/add-student-profile");
  //   } else if (userType === "teachers") {`1
  //     navigate("/add-teacher-profile");
  //   } else {
  //     return null; // Return null or handle other cases if needed
  //   }
  // };

 // console.log(profileData);

  return(
    <>
    <Navbar />

    {loading ? (
      <Loader />
    ) : (
      <div>
       
        {profileData && profileData.profile !== null ? (
          <> 
          <button className="flex items-end">
          <Link to="/target-board-test-series" className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
       Enroll for Test
       </Link>
            </button>          
         
              {/* Display student's profile */}

              <div
                className="flex max-w-2xl mx-auto bg-white rounded-xl shadow-lg 
              overflow-hidden hover:translate-y-6 transition duration-300 ease-in-out mb-10"
              >
                <div className="flex justify-between p-6">
                  {profileData.imageUrl && ( // Check if profileData.imageUrl exists
                    <img
                      src={profileData.imageUrl}
                      alt="Profile"
                      className="rounded-full h-32 w-32 object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-4">
                    {profileData.profile.student['name']}
                  </h2>
                  <div className="text-lg text-gray-700 mb-4">
                    <span className=" font-bold">Phone:</span>{" "}
                    {profileData.profile.whatapp_no}
                  </div>
                  <div className="text-lg text-gray-700 mb-4">
                    <span className=" font-bold ">Guardian Name:</span>{" "}
                    {profileData.profile.guardian_name}
                  </div>
                  <div className="text-lg text-gray-700 mb-4">
                    <span className=" font-bold ">Guardian Contact:</span>{" "}
                    {profileData.profile.guardian_contact}
                  </div>
                  <div className="text-lg text-gray-700 mb-4">
                    <span className=" font-bold ">Address:</span>{" "}
                    {profileData.profile.present_address}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-3xl font-bold mb-4">
                    ID: {profileData.profile.register_id}
                  </h4>
                  <div className="text-lg text-gray-700 mb-4">
                    <span className=" font-bold ">Class:</span>{" "}
                    {profileData.profile.class}
                  </div>
                  <div className="text-lg text-gray-700 mb-4">
                    <span className=" font-bold ">School:</span>{" "}
                    {profileData.profile.school}
                  </div>
                  <div className="text-lg text-gray-700 mb-4">
                    <span className=" font-bold ">Board:</span>{" "}
                    {profileData.profile.board}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 md:max-w-8xl mx-auto mt-10 mb-10">
                <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                  <div className="flex justify-between p-6">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="3em"
                      width="3em"
                    >
                      <path d="M21 8H3a1 1 0 010-2h18a1 1 0 010 2zm-8 10H3a1 1 0 010-2h10a1 1 0 010 2zm8-5H3a1 1 0 010-2h18a1 1 0 010 2z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <p className="text-xl font-semibold mb-2">
                      Preferred Subjects :{" "}
                      <span className="text-blue-500">
                        {profileData.profile.subjects}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                  <div className="flex justify-between p-6">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="h-12 w-12 text-gray-600"
                    >
                      <path d="M8.211 2.047a.5.5 0 00-.422 0l-7.5 3.5a.5.5 0 00.025.917l7.5 3a.5.5 0 00.372 0L14 7.14V13a1 1 0 00-1 1v2h3v-2a1 1 0 00-1-1V6.739l.686-.275a.5.5 0 00.025-.917l-7.5-3.5zM8 8.46L1.758 5.965 8 3.052l6.242 2.913L8 8.46z" />
                      <path d="M4.176 9.032a.5.5 0 00-.656.327l-.5 1.7a.5.5 0 00.294.605l4.5 1.8a.5.5 0 00.372 0l4.5-1.8a.5.5 0 00.294-.605l-.5-1.7a.5.5 0 00-.656-.327L8 10.466 4.176 9.032zm-.068 1.873l.22-.748 3.496 1.311a.5.5 0 00.352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <p className="text-xl font-semibold mb-2">
                      Preferred Tutor:{" "}
                      <span className="text-blue-500">
                        {profileData.profile.tutor_gender}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                  <div className="flex justify-between p-6">
                    <svg
                      viewBox="0 0 640 512"
                      fill="currentColor"
                      className="h-12 w-12 text-gray-600"
                    >
                      <path d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h448c53 0 96-43 96-96V96c0-53-43-96-96-96H96zM64 96c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96zm159.8 80c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48zM96 309.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6-7.5-4.1-16.2-6.4-25.3-6.4h-69.4c-29.4 0-53.3 23.9-53.3 53.3zM461.2 336h56.1c14.7 0 26.7-11.9 26.7-26.7 0-29.5-23.9-53.3-53.3-53.3h-69.4c-9.2 0-17.8 2.3-25.3 6.4 32.4 11.9 57.2 39.5 65.2 73.6zM372 289c-3.9-.7-7.9-1-12-1h-80c-4.1 0-8.1.3-12 1-26 4.4-47.3 22.7-55.9 47-2.7 7.5-4.1 15.6-4.1 24 0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24 0-8.4-1.4-16.5-4.1-24-8.6-24.3-29.9-42.6-55.9-47zm140-113c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48zm-192 80c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <p className="text-xl font-semibold mb-2">
                      Preferred Classes per month:{" "}
                      <span className="text-blue-500">
                        {profileData.profile.no_of_classes}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
          </>
        ) :
        (
          <>
           <button className="flex items-end">
          <Link className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" to="/add-student-profile">
       Enroll for Test
       </Link>
            </button>  

            <div className="text-center text-red-500 font-bold mb-5 mt-20">
          <p>Your profile is incomplete!</p>
          {/* Add more guidance or information for completing the profile */}
          <Link to="/add-student-profile" className="block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Complete Profile
      </Link>
        </div>
          </>
        
        )
        }
      </div>
    )}
  </>
  )  };
export default Profile;
