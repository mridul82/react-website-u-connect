import React from 'react'

import Navbar from '../NavBar'

import {
  faHandshake,
  faPhone,
  faEnvelope
  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Contact = () => {
  return (
    <div>
       <Navbar />
       <div className=" w-full sm:w-1/2 md:w-full p-4">
       
        <div className="flex flex-wrap">
      {/* Left card on larger screens */}
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
        <div className="p-6"> 
                    <h5 className="text-center mr-4 mb-2  
                                   block font-sans text-xl  
                                   font-semibold text-blue-gray-900  
                                   antialiased"> 
                        Reach Us At 
                    </h5> 
                    <ul> 
                        <li className="mt-2"> 
                            <span><FontAwesomeIcon
                          icon={faPhone}
                          
                        /> </span> 
                            +91-9998887776 
                        </li> 
                        <li className="mt-2"> 
                            <span><FontAwesomeIcon icon={faEnvelope} /> </span> 
                            <span>feedback@Urja.org</span> 
                        </li> 
                        <li className="mt-2"> 
                            <span><i className="fa-solid fa-map-pin mr-2"></i>   
                            </span> 
                            A-143, 9th Floor, KK 
                            <span className="pl-4"> 
                            Guwahati Assam  
                            </span> 
                        </li> 
                    </ul> 
                </div>
        </div>
      </div>

      {/* Right card on larger screens */}
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-md p-6"><div className="p-6 "> 
                    <h5 className="mb-2 block font-sans  
                                   text-xl font-semibold  
                                   text-blue-gray-900 antialiased"> 
                        <FontAwesomeIcon icon={faHandshake} />  Branding & Collaboration 
                    </h5> 
                    
                    <div className="text-left mt-4"> 
                        <span><FontAwesomeIcon icon={faEnvelope} /> </span> 
                        <span>branding@urja.org</span> 
                    </div> 
                    <div className="mt-2 text-left"> 
                    <span><i className="fa-solid fa-map-pin mr-2"></i>  </span> 
                            A-143, 9th Floor, KK   -<span className="pl-5">136, 
                        GUwahati Assam</span> 
                    </div> 
                </div> </div>
      </div>

      {/* Responsive layout for smaller screens */}
      
    </div>
       
       </div>

       <div className="w-full sm:w-1/2 md:w-full p-4">

       <div className="flex flex-wrap">
      {/* Left card with form */}
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Your form content */}
          <form>
            {/* Form fields go here */}
            <p className="text-2xl">Feedback & Queries</p> 
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Enter your name"
              />
            </div>
            <label className="text-sm">Email Address*</label> 
                    <br></br> 
                    <input className="bg-gray-50 border border-gray-300  
                                        text-sm rounded-lg focus:border-blue-500 
                                        w-full p-2.5" 
                            type="email" 
                            placeholder="abc@urja.org"/> 
                    <br></br> 
                    <label className="text-sm">Contact No.</label> 
                    <br></br> 
                    <input className="bg-gray-50 border border-gray-300 
                                        text-sm rounded-lg focus:border-blue-500  
                                        w-full p-2.5" 
                            type="text" 
                            placeholder="1324567890"/> 
                    <br></br> 
                    <label className="text-sm"> 
                        Drop Your Query  
                    </label> 
                    <br></br> 
                    <textarea className="bg-gray-50 border border-gray-300  
                                            text-sm rounded-lg  
                                            focus:border-blue-500  
                                            w-full p-2.5" 
                                rows="4" 
                                cols="25" 
                                maxlength="300" 
                                placeholder="Max Allowed Characters: 300"> 
                    </textarea> 
                    <br></br> 
            {/* Other form fields */}
            {/* ... */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Right card with embedded Google Map */}
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Embedded Google Map */}
          <iframe className="w-full h-full md:h-96" id="gmap_canvas" src="https://maps.google.com/maps?q=guwahati&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>
        </div>
      </div>

     
    </div>
      
    </div>
       
    </div>
  )
}

export default Contact