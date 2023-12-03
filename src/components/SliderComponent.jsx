import React from 'react';

const SliderComponent = () => {


  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-25 mx-5 mt-15">
       <div className="  w-full md:w-2/3 p-3 m-5">
      <img src="image_slider/image_slider_5.png" alt="img" style={{ maxHeight: '500px', width: '90%', height: 'auto' }}  />
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
      <form className="mt-4 flex items-center justify-center flex-col sm:flex-row">
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
</form>

      
    </div>

   
  </div>
  );
};

export default SliderComponent;
