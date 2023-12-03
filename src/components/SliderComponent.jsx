import React from 'react';
import { Link } from 'react-router-dom';

const SliderComponent = () => {


  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-25 mx-5 mt-15">
       <div className="  w-full md:w-2/3 p-3">
      <img src="image_slider/image_slider_5.png" alt="img"    />
    </div>
    <div className=" md:w-2/4 text-center">
      <h2 className=" text-5xl font-semibold leading-tight">
        Knowledge with
        <span className="text-brightGreen"> uConnect</span>
      </h2>
      <p className=" text-lightText mt-5 text-start">
        eStudy is your gateway to a world of limitless learning possibilities.
        With our cutting-edge eLearning platform, you can explore a vast
        library of courses, from academic subjects to practical skills, all
        designed to help you achieve your goals.
      </p>

      <Link to={"/contact"} spy={true} smooth={true} duration={500}>
        
        <button className=" bg-white py-2 px-5 rounded-full mt-4 outline hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-brightGreen transition-all">
        Contact Us
      </button>
      </Link>
    </div>

   
  </div>
  );
};

export default SliderComponent;
