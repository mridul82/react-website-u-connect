import React from 'react'

const Buttons = (props) => {
  return (
    <button className="py-1 px-4 rounded-full outline transition-all hover:bg-[#539165] hover:text-white hover:shadow-md">
            {props.buttonName}
    </button>
  )
}

export default Buttons