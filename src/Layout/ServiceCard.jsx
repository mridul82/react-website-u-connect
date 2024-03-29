import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = (props) => {
  return (
    <div className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
      <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
      <div className=" flex flex-row justify-center">
        <img className=" rounded-full w-1/4" src={props.img} alt="img" />
      </div>
      </div>
      <h1 className=" font-semibold text-lg">{props.title}</h1>
      <p>
       {props.desc}
      </p>
<Link to={props.link}>
<h3 className="text-red-400 cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out" >
        Learn more
      </h3>
</Link>
      
    </div>
  )
}

export default ServiceCard