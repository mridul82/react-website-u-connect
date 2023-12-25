import React from 'react';

const SliderComponent = () => {


  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-25 mx-5 ">
       <div className="  w-full md:w-2/3 p-3 m-5">
      <img src="image_slider/image_slider_5.png" alt="img" style={{ maxHeight: '500px', width: '90%', height: 'auto' }}  loading="lazy" />
    </div>
    <div className=" md:w-2/4 text-center">
      <h4 className=" text-5xl font-semibold leading-tight">
      Empowering minds, illuminating futures </h4>
        <span className="text-brightGreen font-semibold"> "Join Urja Connect for a boundless journey of learning and growth!"</span>
      
      <p className=" text-lightText mt-5 text-start">
      uConnect is your gateway to a world of limitless learning possibilities.
        With our cutting-edge eLearning platform, you can search your best curated tutor, a vast
        library of courses, from academic subjects to practical skills, all
        designed to help you achieve your goals.
      </p>
      {/* <form className="mt-4 flex items-center justify-center flex-col sm:flex-row">
  <input
    type="text"
    placeholder="Enter subject"
    className="mr-2 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-brightGreen mb-2 sm:mb-0"
  />
  <input
    type="text"
    placeholder="Enter location"
    className="mr-2 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-brightGreen mb-2 sm:mb-0"
  />
  <button
    type="submit"
    className=" py-2 px-5 rounded-full outline transition-all hover:bg-[#539165] hover:text-white hover:shadow-lg"
  >
    Search
  </button>
</form> */}
<form className="mt-4 flex items-center justify-center flex-col sm:flex-row">
  <div className="relative mb-2 sm:mb-0 mr-2">
    <select
      className="block appearance-none w-48 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-brightGreen"
    >
      <option value="find-tutor">Find a Tutor</option>
      <option value="become-tutor">Become a Tutor</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M6.293 8.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
  <div className="relative mb-2 sm:mb-0">
    <select
      className="block appearance-none w-48 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-brightGreen"
    >
      <option value="">Choose Location</option>
      <option value="location2">Location 2</option>
      {/* Add more location options */}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M6.293 8.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
  <button
    type="submit"
    className=" ml-5 py-2 px-5 rounded-full outline transition-all bg-white border border-gray-300 hover:bg-[#539165] hover:text-white hover:border-transparent hover:shadow-lg"
  >
    Search
  </button>
</form>

      
    </div>

   
  </div>
  );
};

export default SliderComponent;
