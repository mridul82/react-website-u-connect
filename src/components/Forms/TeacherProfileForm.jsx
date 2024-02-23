import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import API_CONFIG from '../../Config/apiLink';
import Loader from '../../Layout/Loader';
import Footer from '../Footer';
import Navbar from '../NavBar';

const TeacherProfileForm = () => {

    const navigate = useNavigate();

      
  const [number, setNumber] = useState('');
  const [selectedGender, setSelectedGender] = useState('M');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [pin, setPin] = useState('');
  const [qualification, setQualification] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [preferredSubject, setPreferredSubject ] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [files, setFiles] = useState([]);

  const [loading, setLoading] = useState(false);

 
    
  const handleSubmit = async(e) => {
    e.preventDefault();


    // Validate 'number' before appending to FormData
   if (!number.trim() ) {
   
    toast.error('Phone Number or Guardian Conatact cannot be blank', {
      position: toast.POSITION.TOP_CENTER,
    });
    return; // Do not proceed with form submission
  }
   
    setLoading(true);
    const formData = new FormData();
    formData.append('whatapp_no', number);
    formData.append('gender', selectedGender);
    formData.append('present_address', address);
    formData.append('area_locality', location);
    formData.append('city', city);
    formData.append('pin_code', pin);
    formData.append('highest_qualification', qualification);
    formData.append('specialisation', specialization);
    formData.append('preferred_subject', preferredSubject);
    formData.append('preferred_location', preferredLocation);
    formData.append('preferred_time', preferredTime);
    formData.append('profile_pic', profilePic);  
    formData.append('education_document1', files);
  

    //console.log([...formData.entries()]);

    const token = localStorage.getItem('accessToken');
    const userType = localStorage.getItem('userType');
   
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data', // Assuming you're sending form data
      },
    };

    try {
      //const apiURL = import.meta.env.VITE_REACT_APP_API_URL; 
      //const apiURL = import.meta.env.VITE_REACT_APP_LOCAL_API_URL;
      const response = await axios.post(`${API_CONFIG.BASE_URL}/api/teacher-profile`, formData, config);
      
      if(response.status === 200) {
        setLoading(false);
        
       
        navigate('/tutor-profile-view', {state: {profile: response.data}});
        
      }
      

    } catch (error) {
      console.log(error)
    }

  }




  return (
    <>
    <Navbar />
    
    <div className="mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl m-5">
    {loading ? (
      <Loader />
    ) : (<>
    <h2 className=' text-lg font-bold text-[#539165] mb-5'>Registration for Teachers/Tutors</h2>
    <form onSubmit={handleSubmit}>
      <  div className="bg-white  px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="company">
              Name*
            </label>
            <input className="w-full bg-gray-200 text-black border
             border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Enter your name"  />
            <div>
              
            </div>
          </div>
          <div className="md:w-1/3 px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="title">
              WhatsApp Number*
            </label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
            id="title" type="text" placeholder="WhatsApp Number" value={number} onChange={(e) => setNumber(e.target.value)}  />
          </div>
          <div className="md:w-1/3 px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="title">
              Gender*
            </label>
            <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" 
            id="selectedGender" 
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
            >
              <option value="">Select Option</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Others</option>
              </select>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
              Present Address*
            </label>
            <textarea className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
            id="application-link" type="text" placeholder="Enter your prsent address here.." value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="location">
              Location*
            </label>
            <div>
              {/* <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location">
                <option>Abuja</option>
                <option>Enugu</option>
                <option>Lagos</option>
              </select> */}
              <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
            id="title" type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="job-type">
              City*
            </label>
            <div>
              {/* <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="job-type">
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Internship</option>
              </select>
               */}
               <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
            id="title" type="text" placeholder="City/Town" value={city} onChange={(e) => setCity(e.target.value)}  />
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="department">
              Pin*
            </label>
            <div>
              {/* <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="department">
                <option>Engineering</option>
                <option>Design</option>
                <option>Customer Support</option>
              </select> */}

<input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
            id="title" type="text" placeholder="Pin Code" value={pin} onChange={(e) => setPin(e.target.value)} />            </div>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="company">
              Highest Qualification*
            </label>
            <input className="w-full bg-gray-200 text-black border
             border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="E.g: MA/MSC .." value={qualification} onChange={(e) => setQualification(e.target.value)}  />
            <div>
             
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="title">
              Your Specialisation*
            </label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
            id="title" type="text" placeholder="E.g: Major in Physics" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="location">
              Preferred Subject*
            </label>
            <div>
              <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" 
              id="preferredSubject"
              value={preferredSubject} onChange={(e) => setPreferredSubject(e.target.value)}
              >
                <option value="">Select an Option</option>
                <option value="Maths_basic">MATHS(BASIC)</option>
                <option value="Maths_standard">MATHS(STANDARD)</option>
                <option value="English">ENGLISH</option>
                <option value="Science">SCIENCE</option>
                <option value="SSc">SOCIAL SCIENCE</option> 
                <option value="physics">PHYSICS</option>  
                <option value="chemistry">CHEMISTRY</option>  
                <option value="biology">BIOLOGY</option> 
                <option value="cs_ip">CS/IP</option> 
                <option value="history">HISTORY</option>  
                <option value="sociology">SOCIOLOGY</option> 
                <option value="geography">GEOGRAPHY</option> 
                <option value="psychology">PSYCHOLOGY</option> 
                <option value="accountancy">ACCOUNTANCY</option> 
                <option value="bs">BUSINESS STUDIES</option> 
                <option value="entre">ENTREPRENEURSHIP</option> 
              </select>
            
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="job-type">
              Preffered Location*
            </label>
            <div>            
              
               <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
            id="title" type="text" placeholder="E.g: Ganeshguri Area" 
            value={preferredLocation} onChange={(e) => setPreferredLocation(e.target.value)} />
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="department">
              Upi Number(Remuneration Payment)*
            </label>
            <div>
             

<input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
            id="title" type="text" placeholder="E.g: phonepe, gpay, paytm etc" 
            value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)}
            />            </div>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
              Upload Profile Photo*
            </label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
             type="file" placeholder="" 
            
           onChange={(e) => setProfilePic(e.target.files[0])}
            />

    


          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
              Upload Aadhar Photocopy*
            </label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
            id="application-link" type="file" multiple placeholder="E.g Master Degree Marksheet"
             onChange={(e) => setFiles(e.target.files[0])}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mt-2">
          <div className="md:w-full px-3">
            <button type='submit' className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
    </>)}
  </div>
  <Footer />
  </>
  )
}

export default TeacherProfileForm