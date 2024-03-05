import React from 'react'

const TeacherCard = (props) => {
  return (


    

  <>

  <div className=" w-full lg:w-1/3 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      <div className='flex items-center justify-center'>
      <img
        className="h-64 md:h-96 lg:h-40 w-64 md:w-96 lg:w-40 rounded-full object-cover"
        src={props.img}
        alt="img"
        loading="lazy"
      />
      </div>
      
      <div className="p-4">
          <h2 className="text-lg font-semibold text-center">Teacher Id: {props.title}</h2>
          <p className="text-center text-sm">Specialization: {props.specialisation}</p>
          <p className="text-center text-sm">Highest Qualification: {props.highest_qualification}</p>
          <p className="text-center text-sm">Subjects: {props.preferred_subject}</p>
        </div>
    </div>
  </>
  
  )
}

export default TeacherCard