import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../Layout/Loader';
import Footer from '../Footer';
import Navbar from '../NavBar';

const StudentProfileForm = () => {

  const location = useLocation();
  const [userName, setUserName] = useState('');

//console.log(JSON.parse(localStorage.getItem('user')));
  useEffect(() => {
    if (location.state === null) {
      // Set the default value for userName if location.state is null
      const user = JSON.parse(localStorage.getItem('user'));
      setUserName(user.name);
    } else {
      const { user } = location.state || {};
      // Access user name
      const newUserName = user ? user.user.name : '';
      // Set the userName state based on the user data in location.state
      setUserName(newUserName);
    }
  }, [location.state]);



 
    const [number, setNumber] = useState('');
  const [selectedGender, setSelectedGender] = useState('M');
  const [address, setAddress] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [guardianContact, setGuardianContact] = useState('');

  const [preferredClass, setPreferredClass] = useState('');
  const [school, setSchool] = useState('');
  const [board, setBoard] = useState('');
  const [preferredSubjects, setPreferredSubjects] = useState([]);
  const [classPerMonth, setClassPerMonth] = useState('');
  const [preferredTutor, setPreferredTutor] = useState('');
  const [reference, setReference] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const handleSubjectsChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setPreferredSubjects(selectedOptions);
  };


  const handleSubmit = async(e) => {
    e.preventDefault(); 

   // Validate 'number' before appending to FormData
   if (!number.trim() || !guardianContact.trim()) {
   
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
    formData.append('class', preferredClass);
    formData.append('school', school);
    formData.append('board', board);
    formData.append('subjects', preferredSubjects);
    formData.append('guardian_name', guardianName);
    formData.append('guardian_contact', guardianContact);
    formData.append('tutor_gender', preferredTutor);
    formData.append('no_of_classes', classPerMonth);
    formData.append('profile_pic', profilePic);
    formData.append('reference_id', reference);
    
   

    //console.log([...formData.entries()]);
    const token = localStorage.getItem('accessToken');
    const userType = localStorage.getItem('userType');
   //console.log(token);
   //console.log(userType);
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data', // Assuming you're sending form data
      },
    };

    try {
      
    //const apiURL = import.meta.env.VITE_REACT_APP_API_URL; 
    const apiURL = import.meta.env.VITE_REACT_APP_LOCAL_API_URL;
      const response = await axios.post(`${apiURL}/api/student-profile`, formData, config);
      
      if(response.status === 200) {
        setLoading(false);
        //console.log(response.data);
        
      
        navigate('/student-profile-view', {state: {profile: response.data}, forceRefresh: true });
        
      }
      

    } catch (error) {
      setLoading(false); 
      //console.log(error)
    }
  }


  return (
    <>
    <Navbar />
    {/* <div className="mx-auto max-w-6xl bg-white py-6 px-5 lg:px-5 shadow-xl m-5">
<button className='flex'>
<Link className="bg-[#539165] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4 items-center justify-center" to="/test-series">
       Enroll for Test Series
       </Link>
</button>
   
          
            
    </div> */}

            
    <div className="mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl m-5">
    {loading ? (
      <Loader />
    ) : (<>
    
    <h2 className=' text-lg font-bold text-[#539165] mb-5'>Registration for enrolling for Test Series / Find Tutor</h2>
    <ToastContainer />
    <form onSubmit={handleSubmit}>
      <  div className="bg-white px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="company">
              Name*
            </label>
            <input className="w-full bg-gray-200 text-black border
             border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Enter your name" value={userName}  readOnly/>
            <div>
              
            </div>
          </div>
          <div className="md:w-1/3 px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="title">
              What App Number*
            </label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
            id="title" type="text" placeholder="What App Number" value={number} onChange={(e) => setNumber(e.target.value)}  />
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
              Guardian Name*
            </label>
            <div>
              {/* <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location">
                <option>Abuja</option>
                <option>Enugu</option>
                <option>Lagos</option>
              </select> */}
              <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
            id="title" type="text" placeholder="Guardian Name" value={guardianName} onChange={(e) => setGuardianName(e.target.value)} />
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="job-type">
              Guardian Contact No.*
            </label>
            <div>
              {/* <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="job-type">
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Internship</option>
              </select>
               */}
               <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
            id="title" type="text" placeholder="Guardian Contact" value={guardianContact} onChange={(e) => setGuardianContact(e.target.value)}  />
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="job-type">
              Reference Id (if any)
            </label>
            <div>
              {/* <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="job-type">
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Internship</option>
              </select>
               */}
               <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
            id="title" type="text" placeholder="Reference Id" value={reference} onChange={(e) => setReference(e.target.value)}  />
            </div>
          </div>
     
        </div>


        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="class">
              Class*
            </label>
            <div>
              {/* <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location">
                <option>Abuja</option>
                <option>Enugu</option>
                <option>Lagos</option>
              </select> */}
              <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" 
              id="class"
              value={preferredClass} onChange={(e) => setPreferredClass(e.target.value)}
              >
                <option value="">Your Preferred Class</option>
                <option value="8">VIII</option>
                <option value="9">IX</option>
                <option value="10">X</option>
                <option value="11">XI</option>
                <option value="12">XII</option>          
              </select>
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="school">
              School*
            </label>
            <div>
              {/* <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="job-type">
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Internship</option>
              </select>
               */}
               <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
            id="title" type="text" placeholder="Your School Name" value={school} onChange={(e) => setSchool(e.target.value)}  />
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="department">
              Board*
            </label>
            <div>
              {/* <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="department">
                <option>Engineering</option>
                <option>Design</option>
                <option>Customer Support</option>
              </select> */}

<input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
            id="title" type="text" placeholder="Board" value={board} onChange={(e) => setBoard(e.target.value)} />            </div>
          </div>
        </div>


        <div className="-mx-3 md:flex mb-2">
     
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            
      <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="subjects">
        Preferred Subjects*
      </label>
      <div className="relative inline-block w-full text-gray-700">
        <select
          className="appearance-none w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 rounded"
          id="subjects"
          multiple
          value={preferredSubjects}
          onChange={handleSubjectsChange}
        >
          <option value="">Your Preferred Subjects</option>
          <option value="Maths">Maths</option>
          <option value="English">English</option>
          <option value="Science">Science</option>
          <option value="SSc">Social Science</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 10.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0-1.414-1.414L10 10.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3z"
            />
          </svg>
        </div>
      </div>     

    </div>
    <div className="md:w-1/2 px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="department">
              Classes/month (Only for Find Tutor)
            </label>
            <div>
              {/* <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="department">
                <option>Engineering</option>
                <option>Design</option>
                <option>Customer Support</option>
              </select> */}

<select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" 
              id="class"
              value={classPerMonth} onChange={(e) => setClassPerMonth(e.target.value)}
              >
                <option value="">Your Preferred Class/Month</option>
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="16">16</option>
                <option value="20">20</option>
              </select>         
             </div>
          </div>

          <div className="md:w-1/2 px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="department">
             Preferred Tutor (Only for Find Tutor)
            </label>
            <div>
             

<select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" 
              id="class"
              value={preferredTutor} onChange={(e) => setPreferredTutor(e.target.value)}
              >
                <option value="">Your Preferred Tutor </option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="any">Any</option>
              
              </select>         
             </div>
          </div>

        </div>
       
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
              Upload Profile Photo
            </label>
            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
             type="file" placeholder="" 
            
           onChange={(e) => setProfilePic(e.target.files[0])}
            />

    


          </div>
        </div>
       
        <div className="-mx-3 md:flex mt-2">
          <div className="md:w-full px-3">
            <button type='submit' className="md:w-full bg-green-700 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
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

export default StudentProfileForm