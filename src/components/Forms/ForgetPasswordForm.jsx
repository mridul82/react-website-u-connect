import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import API_CONFIG from '../../Config/apiLink';
import Loader from '../../Layout/Loader';


const ForgetPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [selectedButton, setSelectedButton]= useState('');
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

      const handleButtonClick = (buttonType) => {
        setSelectedButton(buttonType);
      };

    const handleResetPassword = async(e) => {
        e.preventDefault();

      if (!email.trim() || !selectedButton ) {
        console.log(selectedButton);
        // Display toast message if input fields are empty
        toast.error('Please fill all fields and select an option.', {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }
      setLoading(true);
      try {
       // const apiURL = import.meta.env.VITE_REACT_APP_API_URL; 
        // const apiURL = import.meta.env.VITE_REACT_APP_LOCAL_API_URL;

         const response = await axios.post(`${API_CONFIG.BASE_URL}/api/forget-password`, {
            email
         });

         if(response.status === 200) {
            setLoading(false);
            setEmail('');
            toast.info(response.data.msg, {
                position: toast.POSITION.TOP_CENTER,
            })
         }
        
      } catch (error) {
        
        if(error.response && error.response.status === 422) {
            const validationErrors = error.response.data.errors;
            //console.log(validationErrors);
          Object.values(validationErrors).forEach((errors) => {
            errors.forEach((errorMessage) => {
              //console.log(errorMessage);
              toast.error(errorMessage, { position: toast.POSITION.TOP_LEFT });
            });
          });
          } else if(error.response && error.response.status === 404 ){
            //console.log(error.response.data['msg']);
            toast.error(error.response.data.msg,{ position: toast.POSITION.TOP_LEFT });
          }     
          else {
            toast.error('An error occurred. Please try again.', {
              position: toast.POSITION.TOP_CENTER,
            });
          }
      }finally {
        setLoading(false); // Set loading back to false after login attempt
      }

}
   
  return (

  <>
  {loading ? (
    <Loader />
  ): (

    <>

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
   
    
  
   
     
    <div>
      <button
        type="submit"
        onClick={handleResetPassword}
        className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#539165] rounded-md shadow hover:bg-[#539165] focus:outline-none focus:ring-blue-200 focus:ring-4"
      >
        Send Reset Link 
      </button>
    </div>
   
  </form>
    </>
  )}
  </>
   
  )
}

export default ForgetPasswordForm