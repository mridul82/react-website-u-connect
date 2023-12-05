import React from 'react'

const Heading = (props) => {
  return (
    <div className="w-full flex justify-between items-center mt-10 md:mt-0">
      <h3 className=" text-2xl md:text-4xl font-semibold">
        {props.title1} <span className=" text-brightGreen">{props.title2}</span>
      </h3>
      <div class="ml-auto">
      <button className="py-1 px-2 md:px-4 rounded-full outline transition-all hover:bg-[#539165] hover:text-white hover:shadow-md">
            View All
    </button>
    </div>
    </div>
  )
}

export default Heading