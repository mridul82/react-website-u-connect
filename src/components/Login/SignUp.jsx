import axios from 'axios'; // Import Axios for HTTP requests
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import API_CONFIG from '../../Config/apiLink';
import Loader from '../../Layout/Loader';

const SignUp = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim() || selectedButton === null) {
      toast.error('Please fill all fields and select an option.', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    //console.log(import.meta.env.VITE_REACT_APP_LOCAL_API_URL);
    setLoading(true);

    try {
          //const apiURL = import.meta.env.VITE_REACT_APP_API_URL; 
          //const apiURL = import.meta.env.VITE_REACT_APP_LOCAL_API_URL;


      const ApiUrl =
        selectedButton === 'students'
          ? `${API_CONFIG.BASE_URL}/api/student-register`
          : selectedButton === 'teachers'
          ? `${API_CONFIG.BASE_URL}/api/teacher-register`
          : '';

      const response = await axios.post(ApiUrl, {
        name,
        phone,
        email,
        password,
        selectedButton,
      });

      if (response.status === 200) {
        const accessToken = response.data.access_token;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        
        if(selectedButton === 'teachers')
        {
          const isProfileComplete = response.data.isProfileComplete;
          localStorage.setItem('isProfileComplete', isProfileComplete);
          if (isProfileComplete === 'true') {
            navigate('/tutor-profile-view', { state: { user: response.data, token:accessToken } });
          } else {
            navigate('/add-tutor-profile', { state: { user: response.data, token:accessToken } });
          }


      

        }else if(selectedButton === 'students')
        {
          const isProfileComplete = response.data.isProfileComplete;
          localStorage.setItem('isProfileComplete', isProfileComplete);
          if (isProfileComplete === 'true') {
            navigate('/student-profile-view', { state: { user: response.data, token:accessToken } });
          } else {
            navigate('/add-student-profile', { state: { user: response.data, token:accessToken } });
          }
          //navigate('/profile', {state: {user: response.data}});
        }


      } else {
        toast.error('Registration failed. Please try again.', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      if(error.response && error.response.status === 422) {
        const validationErrors = error.response.data.errors;

      Object.values(validationErrors).forEach((errors) => {
        errors.forEach((errorMessage) => {
          toast.error(errorMessage, { position: toast.POSITION.TOP_LEFT });
        });
      });
      } else {
        toast.error('Registration failed. Please try again later.', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    
    } finally {
      setLoading(false);
    }
  };

  return (
        
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">   
    {loading ? (
      <Loader />
    ) : (
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
            <ToastContainer />
        <div className="p-4 py-6 text-white bg-[#539165] md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">Urja Connect</a>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
          <img src="logo/logo.jpg" className=" rounded-full" />
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Already Sign Up?</span>
            <button className="bg-white text-black bg-[#539165]  hover:bg-black hover:text-white hover:shadow-lg p-2 rounded-lg">
            <Link to={"/login"} >
          Login
           </Link>
            </button>
           
              
            
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our{" "}
            <Link to="/terms-conditions" className="cursor-pointer text-gray-700">
           terms
       
            and
           
              conditions
           </Link>
              
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
        <div className="mt-6">
                    <h1 >Select type of account</h1>

                    <div className="mt-3 md:flex md:items-center md:-mx-2">
                        <button className={`flex justify-center w-full px-6 py-3 border
                          bg-[#539165] rounded-lg md:w-auto md:mx-2 focus:outline-none
                         ${selectedButton === 'teachers' ? 'bg-[#539165] text-white' : 'bg-white text-[#539165]'}
                         `}
                         
                         onClick={() => handleButtonClick('teachers') }>
                            

                            <span className="mx-2">
                                Teachers
                            </span>
                        </button>

                        <button className={`flex justify-center w-full px-6 py-3 mt-4 bg-[#539165] border
                         border-[#539165] rounded-lg md:mt-0 md:w-auto md:mx-2 dark:bg-[#539165] dark:bg-[#539165] focus:outline-none
                         ${selectedButton === 'students' ? 'bg-[#539165] text-white' : 'bg-white bg-[#539165]'}`}
                         onClick={() => handleButtonClick('students')}
                         >
                           
                            <span className="mx-2">
                                Students/Parents
                            </span>
                        </button>
                    </div>
                </div>
          <form action="#" className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-semibold text-gray-500">
                Name
              </label>
              <input
                type="name"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-semibold text-gray-500">
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-semibold text-gray-500">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                  
                >
                  Password
                </label>
                
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label htmlFor="remember" className="text-sm font-semibold text-gray-500">
                Remember me
              </label>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleSignup}
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#539165] rounded-md shadow hover:bg-[#539165] focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Sign Up
              </button>
            </div>
            <div className="flex flex-col space-y-5">
             
            </div>
          </form>
        </div>
      </div>
    )}   

      
    </div>
  )
};

export default SignUp;
