import React from 'react'

const TeacherCard = (props) => {
  return (


<div className="w-full md:w-1/4 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] 
rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out flex m-2">
  <div className="w-64 md:w-96 lg:w-40 h-64 md:h-96 lg:h-40 relative rounded-full overflow-hidden">
    <img
      className="absolute h-full w-full object-cover"
      src={props.img}
      alt="img"
      loading="lazy"
    />    
  </div>
  
  <div className="p-4 flex flex-col justify-center">
    <h2 className="text-lg font-semibold">Teacher Id: {props.title}</h2>
    <p className="text-sm">Specialization: {props.specialisation}</p>
    <p className="text-sm">Highest Qualification: {props.highest_qualification}</p>
    <p className="text-sm">Subjects: {props.preferred_subject}</p>
  </div>
</div>

  
  )
}

export default TeacherCard