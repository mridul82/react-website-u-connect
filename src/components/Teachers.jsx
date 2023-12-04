import React from 'react'
import Heading from '../Layout/Heading'
import TeacherCard from '../Layout/TeacherCard'

const Teachers = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center md:px-3 px-2 mb-10 m-5">
      <Heading title1="Our" title2="Teacher" />

      <div className=" flex flex-wrap justify-center mt-6">
        <div className="flex md:flex-row flex-col items-center justify-between gap-3 mb-3">
        <TeacherCard img={"img/tutor1.jpg"} title="Web Development" />
        <TeacherCard img={"img/tutor2.jpg"} title="App Development" />
        <TeacherCard img={"img/tutor3.jpg"} title="Graphic Designer" />
        </div>
       <div className='flex md:flex-row flex-col items-center justify-between gap-3 mb-3'>
       <TeacherCard img={"img/tutor4.jpg"} title="Digital Marketing" />
        <TeacherCard img={"img/tutor5.jpg"} title="Graphic Designer" />
        <TeacherCard img={"img/tutor6.jpg"} title="Digital Marketing" />
       </div>
        
      </div>
    </div>
  )
}

export default Teachers
