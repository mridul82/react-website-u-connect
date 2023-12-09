import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-brightBackground text-white rounded-t-2xl mt-8 md:mt-0">
<div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Urja Connect</h1>
          <p className=" text-sm">
          Empowering minds, illuminating futures<br/>
"Join Urja Connect for a boundless journey of learning and growth!"
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="about"
              
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
             
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Tutor
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
             Mock Test
            </Link>
            <Link
              to="services"
             
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Find Tutor
            </Link>
            <Link
              to="services"
              
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Study Materials
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/"  duration={500}>
              123 new york city 
            </Link>
            <Link to="/"  duration={500}>
              support@care.com
            </Link>
            <Link to="/" duration={500}>
              +123-456-7890
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by
          <span className=" text-hoverColor"> ms</span> | All
          rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer